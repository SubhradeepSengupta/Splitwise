using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Splitwise.DomainModel.Models;
using Splitwise.Repository.ApplicationClasses;
using System.Security.Claims;
using Microsoft.AspNetCore.Http;

namespace Splitwise.Repository.Group
{
    public class GroupRepository : IGroupRepository
    {
        #region Private Variables

        #region Dependencies

        private readonly ApplicationDbContext _context;
        private readonly UserManager<ApplicationUser> _userManager;

        #endregion

        #endregion

        #region Constructors

        public GroupRepository(ApplicationDbContext context, UserManager<ApplicationUser> userManager)
        {
            this._context = context;
            this._userManager = userManager;
        }

        #endregion

        #region IGroupRepository methods

        public async Task<IEnumerable<Category>> GetAllCategoriesASync()
        {
            var category = await _context.Categories.ToListAsync();
            return category;
        }

        public async Task<IEnumerable<UserGroupAC>> GetAllGroupsAsync(string userId)
        {
            var groups = await _context.UserGroupMappers.Where(u => u.UserID.Equals(userId)).Include(u => u.Groups).Where(g => g.Groups.IsDeleted == false).Include(u => u.Groups.UserGroupMappers).ThenInclude(u => u.Users).ToListAsync();
            var groupList = new List<UserGroupAC>();

            foreach (var group in groups)
            {
                var createdBy = _userManager.FindByIdAsync(group.Groups.CreatedBy);
                var groupAC = new UserGroupAC
                {
                    GroupID = group.GroupID,
                    GroupName = group.Groups.Name,
                    CreatedBy = createdBy.Result.FullName,
                    DateCreated = group.Groups.DateCreated,
                    Category = group.Groups.Category,
                    Note = group.Groups.Note,
                    SimplifyDebts = group.Groups.SimplifyDebts,
                    GroupUsers = new List<UserAC>()
                };

                foreach (var user in group.Groups.UserGroupMappers)
                {
                    groupAC.GroupUsers.Add(new UserAC
                    {
                        Id = user.UserID,
                        FullName = user.Users.FullName,
                        UserName = user.Users.UserName
                    });
                }
                groupList.Add(groupAC);
            }

            return groupList;
        }

        public async Task<UserGroupAC> GetGroupByIdAsync(string userId, int groupId)
        {
            var groups = await _context.UserGroupMappers.Where(u => u.UserID.Equals(userId)).Where(u => u.GroupID == groupId).Include(u => u.Groups).Include(u => u.Groups.UserGroupMappers).ThenInclude(u => u.Users).Where(g => g.Groups.IsDeleted == false).FirstOrDefaultAsync();
            var selectedGroup = new UserGroupAC();

            foreach (var group in groups.Groups.UserGroupMappers)
            {
                selectedGroup.GroupID = groups.GroupID;
                selectedGroup.GroupName = groups.Groups.Name;
                selectedGroup.CreatedBy = _userManager.FindByIdAsync(group.Groups.CreatedBy).Result.FullName;
                selectedGroup.DateCreated = groups.Groups.DateCreated;
                selectedGroup.Category = groups.Groups.Category;
                selectedGroup.Note = groups.Groups.Note;
                selectedGroup.SimplifyDebts = groups.Groups.SimplifyDebts;
                selectedGroup.GroupUsers = new List<UserAC>();

                foreach (var user in group.Groups.UserGroupMappers)
                {
                    selectedGroup.GroupUsers.Add(new UserAC
                    {
                        Id = user.UserID,
                        FullName = user.Users.FullName,
                        UserName = user.Users.UserName
                    });
                }
            }
            return selectedGroup;
        }

        public async Task CreateGroupAsync(CreateGroupAC group, string userId)
        {
            List<Activity> activities = new List<Activity>();
            List<Friend> friendList = await _context.Friends.Where(u => u.UserID.Equals(userId) || u.FriendID.Equals(userId)).ToListAsync();
            List<Friend> newFriend = new List<Friend>();

            var newGroup = new DomainModel.Models.Group
            {
                Name = group.Name,
                Category = group.Category,
                SimplifyDebts = group.SimplifyDebts,
                Note = group.Note,
                DateCreated = DateTime.Now,
                CreatedBy = userId,
                IsDeleted = false
            };

            activities.Add(new Activity
            {
                UserID = newGroup.CreatedBy,
                Date = DateTime.Now,
                Description = $"You created a group {newGroup.Name}"
            });

            await _context.Groups.AddAsync(newGroup);
            await SaveChangesAsync();

            var addedGroup = await _context.Groups.Where(g => g.ID == newGroup.ID).FirstOrDefaultAsync();

            var newUserGroup = new UserGroupMapper
            {
                GroupID = addedGroup.ID,
                UserID = addedGroup.CreatedBy
            };

            await _context.UserGroupMappers.AddAsync(newUserGroup);
            await SaveChangesAsync();

            //var allFriends = await _context.Friends.ToListAsync();

            for (int i = 0; i < group.UserGroupMapper.Count; i++)
            {
                var users = await _context.Users.Select(u => u.UserName).ToListAsync();
                UserGroupMapper newUserGroupMapper = new UserGroupMapper();

                var newUser = new ApplicationUser
                {
                    FullName = group.UserGroupMapper[i].FullName,
                    UserName = group.UserGroupMapper[i].UserName
                };

                if (users.Contains(group.UserGroupMapper[i].UserName.ToLower()))
                {

                    newUserGroupMapper.UserID = _userManager.FindByNameAsync(group.UserGroupMapper[i].UserName).Result.Id;
                    newUserGroupMapper.GroupID = addedGroup.ID;

                    await _context.UserGroupMappers.AddAsync(newUserGroupMapper);
                    await SaveChangesAsync();
                }
                else
                {
                    var result = await _userManager.CreateAsync(newUser);

                    if (result.Succeeded)
                    {
                        newUserGroupMapper.UserID = _userManager.FindByNameAsync(group.UserGroupMapper[i].UserName).Result.Id;
                        newUserGroupMapper.GroupID = addedGroup.ID;

                        await _context.UserGroupMappers.AddAsync(newUserGroupMapper);
                        await _context.SaveChangesAsync();
                    }
                }

                if (friendList.Count != 0)
                {
                    List<Friend> userFriendList = await _context.Friends.Where(u => u.UserID.Equals(newUserGroupMapper.UserID) || u.FriendID.Equals(newUserGroupMapper.UserID)).ToListAsync();

                    if (!friendList.Any(f => f.FriendID.Equals(newUserGroupMapper.UserID) || f.UserID.Equals(newUserGroupMapper.UserID)))
                    {
                        newFriend.Add(new Friend
                        {
                            UserID = userId,
                            FriendID = newUserGroupMapper.UserID
                        });

                        for (int j = i + 1; j < group.UserGroupMapper.Count; j++)
                        {
                            if (users.Contains(group.UserGroupMapper[j].UserName.ToLower()))
                            {
                                if (!userFriendList.Any(f => f.FriendID.Equals(_userManager.FindByNameAsync(group.UserGroupMapper[j].UserName).Result.Id) || f.UserID.Equals(_userManager.FindByNameAsync(group.UserGroupMapper[j].UserName).Result.Id)))
                                {
                                    newFriend.Add(new Friend
                                    {
                                        UserID = newUserGroupMapper.UserID,
                                        FriendID = _userManager.FindByNameAsync(group.UserGroupMapper[j].UserName).Result.Id
                                    });
                                }
                            }
                            else
                            {
                                var newMember = new ApplicationUser
                                {
                                    FullName = group.UserGroupMapper[j].FullName,
                                    UserName = group.UserGroupMapper[j].UserName
                                };

                                var result = await _userManager.CreateAsync(newMember);

                                if (result.Succeeded)
                                {
                                    if (!userFriendList.Any(f => f.FriendID.Equals(_userManager.FindByNameAsync(group.UserGroupMapper[j].UserName).Result.Id) || f.UserID.Equals(_userManager.FindByNameAsync(group.UserGroupMapper[j].UserName).Result.Id)))
                                    {
                                        newFriend.Add(new Friend
                                        {
                                            UserID = newUserGroupMapper.UserID,
                                            FriendID = _userManager.FindByNameAsync(group.UserGroupMapper[j].UserName).Result.Id
                                        });
                                    }
                                }
                            }
                        }
                    }
                    else
                    {
                        for (int j = i + 1; j < group.UserGroupMapper.Count; j++)
                        {
                            if (users.Contains(group.UserGroupMapper[j].UserName.ToLower()))
                            {
                                if (!userFriendList.Any(f => f.FriendID.Equals(_userManager.FindByNameAsync(group.UserGroupMapper[j].UserName).Result.Id) || f.UserID.Equals(_userManager.FindByNameAsync(group.UserGroupMapper[j].UserName).Result.Id)))
                                {
                                    newFriend.Add(new Friend
                                    {
                                        UserID = newUserGroupMapper.UserID,
                                        FriendID = _userManager.FindByNameAsync(group.UserGroupMapper[j].UserName).Result.Id
                                    });
                                }
                            }
                            else
                            {
                                var newMember = new ApplicationUser
                                {
                                    FullName = group.UserGroupMapper[j].FullName,
                                    UserName = group.UserGroupMapper[j].UserName
                                };

                                var result = await _userManager.CreateAsync(newMember);

                                if (result.Succeeded)
                                {
                                    if (!userFriendList.Any(f => f.FriendID.Equals(_userManager.FindByNameAsync(group.UserGroupMapper[j].UserName).Result.Id) || f.UserID.Equals(_userManager.FindByNameAsync(group.UserGroupMapper[j].UserName).Result.Id)))
                                    {
                                        newFriend.Add(new Friend
                                        {
                                            UserID = newUserGroupMapper.UserID,
                                            FriendID = _userManager.FindByNameAsync(group.UserGroupMapper[j].UserName).Result.Id
                                        });
                                    }
                                }
                            }
                        }
                    }
                }
                else
                {
                    List<Friend> userFriendList = await _context.Friends.Where(u => u.UserID.Equals(newUserGroupMapper.UserID) || u.FriendID.Equals(newUserGroupMapper.UserID)).ToListAsync();

                    newFriend.Add(new Friend
                    {
                        UserID = userId,
                        FriendID = newUserGroupMapper.UserID
                    });

                    for (int j = i + 1; j < group.UserGroupMapper.Count; j++)
                    {
                        if (users.Contains(group.UserGroupMapper[j].UserName.ToLower()))
                        {
                            if (!userFriendList.Any(f => f.FriendID.Equals(_userManager.FindByNameAsync(group.UserGroupMapper[j].UserName).Result.Id) || f.UserID.Equals(_userManager.FindByNameAsync(group.UserGroupMapper[j].UserName).Result.Id)))
                            {
                                newFriend.Add(new Friend
                                {
                                    UserID = newUserGroupMapper.UserID,
                                    FriendID = _userManager.FindByNameAsync(group.UserGroupMapper[j].UserName).Result.Id
                                });
                            }
                        }
                        else
                        {
                            var newMember = new ApplicationUser
                            {
                                FullName = group.UserGroupMapper[j].FullName,
                                UserName = group.UserGroupMapper[j].UserName
                            };

                            var result = await _userManager.CreateAsync(newMember);

                            if (result.Succeeded)
                            {
                                if (!userFriendList.Any(f => f.FriendID.Equals(_userManager.FindByNameAsync(group.UserGroupMapper[j].UserName).Result.Id) || f.UserID.Equals(_userManager.FindByNameAsync(group.UserGroupMapper[j].UserName).Result.Id)))
                                {
                                    newFriend.Add(new Friend
                                    {
                                        UserID = newUserGroupMapper.UserID,
                                        FriendID = _userManager.FindByNameAsync(group.UserGroupMapper[j].UserName).Result.Id
                                    });
                                }
                            }
                        }

                    }
                }

                activities.Add(new Activity
                {
                    UserID = newGroup.CreatedBy,
                    Date = DateTime.Now,
                    Description = $"You added {group.UserGroupMapper[i].FullName} to {group.Name}"
                });
            }

            await _context.Friends.AddRangeAsync(newFriend);
            await _context.Activities.AddRangeAsync(activities);
            await SaveChangesAsync();
        }

        public async Task<Boolean> EditGroupAsync(UserGroupAC group)
        {
            DomainModel.Models.Group groupToEdit = await _context.Groups.Where(g => g.ID == group.GroupID).FirstOrDefaultAsync();
            List<UserGroupMapper> userGroup = await _context.UserGroupMappers.Include(u => u.Users).Where(g => g.GroupID == group.GroupID).ToListAsync();
            var allUsers = await _context.Users.ToListAsync();
            var newUserGroupMapper = new List<UserGroupMapper>();

            foreach (var users in group.GroupUsers)
            {
                newUserGroupMapper.Add(new UserGroupMapper
                {
                    GroupID = group.GroupID,
                    UserID = allUsers.Where(u => u.UserName.Equals(users.UserName)).Select(u => u.Id).FirstOrDefault()
                });
            }

            if (groupToEdit != null)
            {
                groupToEdit.Name = group.GroupName;
                groupToEdit.Category = group.Category;
                groupToEdit.SimplifyDebts = group.SimplifyDebts;
                groupToEdit.Note = group.Note;
                groupToEdit.UserGroupMappers = newUserGroupMapper;

                _context.Groups.Update(groupToEdit);
                return true;
            }
            return false;
        }

        public async Task<Boolean> DeleteGroupAsync(int groupId)
        {
            Activity activity = new Activity();
            var groupToBeDeleted = await _context.Groups.FindAsync(groupId);
            var userGroup = await _context.UserExpenseMappers.Where(u => u.Expenses.GroupID == groupId).ToListAsync();
            if (groupToBeDeleted != null)
            {
                groupToBeDeleted.IsDeleted = true;
                activity.UserID = groupToBeDeleted.CreatedBy;
                activity.Date = DateTime.Now;
                activity.Description = $"You deleted the group {groupToBeDeleted.Name}";
                _context.UserExpenseMappers.RemoveRange(userGroup);
                _context.Groups.Update(groupToBeDeleted);
                await _context.Activities.AddAsync(activity);
                return true;
            }
            return false;
        }

        public async Task AddUserToGroupAsync(int groupId, string currentUserId, List<CreateUserAC> user)
        {
            List<Activity> activityList = new List<Activity>();
            List<Friend> friendList = await _context.Friends.Where(u => u.UserID.Equals(currentUserId) || u.FriendID.Equals(currentUserId)).ToListAsync();
            List<Friend> newFriend = new List<Friend>();
            string group = await _context.Groups.Where(g => g.ID == groupId).Select(g => g.Name).FirstOrDefaultAsync();
            var groupUsers = await _context.UserGroupMappers.Where(u => u.GroupID == groupId).ToListAsync();


            for (int i = 0; i < user.Count; i++)
            {
                var allUsers = await _context.Users.Select(u => u.UserName).ToListAsync();
                var newUsers = new UserGroupMapper();

                var newUser = new ApplicationUser
                {
                    FullName = user[i].FullName,
                    UserName = user[i].UserName
                };

                if (allUsers.Contains(user[i].UserName.ToLower()))
                {
                    newUsers.GroupID = groupId;
                    newUsers.UserID = _userManager.FindByNameAsync(user[i].UserName).Result.Id;

                    await _context.UserGroupMappers.AddAsync(newUsers);
                    await SaveChangesAsync();
                }
                else
                {
                    var result = await _userManager.CreateAsync(newUser);

                    if (result.Succeeded)
                    {
                        newUsers.UserID = _userManager.FindByNameAsync(user[i].UserName).Result.Id;
                        newUsers.GroupID = groupId;

                        await _context.UserGroupMappers.AddAsync(newUsers);
                        await SaveChangesAsync();
                    }
                }

                if (friendList.Count != 0)
                {
                    List<Friend> userFriendList = await _context.Friends.Where(u => u.UserID.Equals(newUsers.UserID) || u.FriendID.Equals(newUsers.UserID)).ToListAsync();

                    if (!friendList.Any(f => f.FriendID.Equals(newUsers.UserID) || f.UserID.Equals(newUsers.UserID)))
                    {
                        newFriend.Add(new Friend
                        {
                            UserID = currentUserId,
                            FriendID = newUsers.UserID
                        });

                        for (int j = i + 1; j < user.Count; j++)
                        {
                            if (allUsers.Contains(user[j].UserName.ToLower()))
                            {
                                if (!userFriendList.Any(f => f.FriendID.Equals(_userManager.FindByNameAsync(user[j].UserName).Result.Id) || f.UserID.Equals(_userManager.FindByNameAsync(user[j].UserName).Result.Id)))
                                {
                                    newFriend.Add(new Friend
                                    {
                                        UserID = newUsers.UserID,
                                        FriendID = _userManager.FindByNameAsync(user[j].UserName).Result.Id
                                    });
                                }
                            }
                            else
                            {
                                var newMember = new ApplicationUser
                                {
                                    FullName = user[j].FullName,
                                    UserName = user[j].UserName
                                };

                                var result = await _userManager.CreateAsync(newMember);

                                if (result.Succeeded)
                                {
                                    if (!userFriendList.Any(f => f.FriendID.Equals(_userManager.FindByNameAsync(user[j].UserName).Result.Id) || f.UserID.Equals(_userManager.FindByNameAsync(user[j].UserName).Result.Id)))
                                    {
                                        newFriend.Add(new Friend
                                        {
                                            UserID = newUsers.UserID,
                                            FriendID = _userManager.FindByNameAsync(user[j].UserName).Result.Id
                                        });
                                    }
                                }
                            }
                        }
                    }
                    else
                    {
                        for (int j = i + 1; j < user.Count; j++)
                        {
                            if (allUsers.Contains(user[j].UserName.ToLower()))
                            {
                                if (!userFriendList.Any(f => f.FriendID.Equals(_userManager.FindByNameAsync(user[j].UserName).Result.Id) || f.UserID.Equals(_userManager.FindByNameAsync(user[j].UserName).Result.Id)))
                                {
                                    newFriend.Add(new Friend
                                    {
                                        UserID = newUsers.UserID,
                                        FriendID = _userManager.FindByNameAsync(user[j].UserName).Result.Id
                                    });
                                }
                            }
                            else
                            {
                                var newMember = new ApplicationUser
                                {
                                    FullName = user[j].FullName,
                                    UserName = user[j].UserName
                                };

                                var result = await _userManager.CreateAsync(newMember);

                                if (result.Succeeded)
                                {
                                    if (!userFriendList.Any(f => f.FriendID.Equals(_userManager.FindByNameAsync(user[j].UserName).Result.Id) || f.UserID.Equals(_userManager.FindByNameAsync(user[j].UserName).Result.Id)))
                                    {
                                        newFriend.Add(new Friend
                                        {
                                            UserID = newUsers.UserID,
                                            FriendID = _userManager.FindByNameAsync(user[j].UserName).Result.Id
                                        });
                                    }
                                }
                            }
                        }
                    }
                }
                else
                {
                    newFriend.Add(new Friend
                    {
                        UserID = currentUserId,
                        FriendID = newUsers.UserID
                    });

                    for (int j = i + 1; j < user.Count; j++)
                    {
                        if (allUsers.Contains(user[j].UserName.ToLower()))
                        {
                            newFriend.Add(new Friend
                            {
                                UserID = newUsers.UserID,
                                FriendID = _userManager.FindByNameAsync(user[j].UserName).Result.Id
                            });
                        }
                        else
                        {
                            var newMember = new ApplicationUser
                            {
                                FullName = user[j].FullName,
                                UserName = user[j].UserName
                            };

                            var result = await _userManager.CreateAsync(newMember);

                            if (result.Succeeded)
                            {
                                newFriend.Add(new Friend
                                {
                                    UserID = newUsers.UserID,
                                    FriendID = _userManager.FindByNameAsync(user[j].UserName).Result.Id
                                });
                            }
                        }
                    }
                }

                foreach (var users in groupUsers.Where(g => !g.UserID.Equals(currentUserId)))
                {
                    List<Friend> userFriendList = await _context.Friends.Where(u => u.UserID.Equals(newUsers.UserID) || u.FriendID.Equals(newUsers.UserID)).ToListAsync();

                    if (!userFriendList.Any(f => f.FriendID.Equals(users.UserID) || f.UserID.Equals(users.UserID)))
                    {
                        newFriend.Add(new Friend
                        {
                            UserID = newUsers.UserID,
                            FriendID = users.UserID
                        });
                    }
                }

                activityList.Add(new Activity
                {
                    UserID = currentUserId,
                    Date = DateTime.Now,
                    Description = $"You added {user[i].FullName} to {group}"
                });
            }
            await _context.Friends.AddRangeAsync(newFriend);
            await _context.Activities.AddRangeAsync(activityList);
            await SaveChangesAsync();
        }

        public void Dispose()
        {
            throw new NotImplementedException();
        }

        public async Task SaveChangesAsync()
        {
            await _context.SaveChangesAsync();
        }
        #endregion

    }
}
