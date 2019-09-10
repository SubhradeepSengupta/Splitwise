using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Splitwise.DomainModel.Models;

namespace Splitwise.Repository.User
{
    public class UserRepository : IUserRepository
    {
        #region Private Variables

        #region Dependencies

        private readonly ApplicationDbContext _context;
        private readonly UserManager<ApplicationUser> _userManager;

        #endregion

        #endregion

        #region Constructors

        public UserRepository(ApplicationDbContext context, UserManager<ApplicationUser> userManager)
        {
            this._context = context;
            this._userManager = userManager;
        }

        #endregion

        #region IUserRepository methods

        public async Task<IEnumerable<UserAC>> GetAllUsersAsync()
        {
            var users = await _userManager.Users.ToListAsync();

            List<UserAC> userList = new List<UserAC>();

            foreach (var user in users)
            {
                userList.Add(new UserAC
                {
                    Id = user.Id,
                    FullName = user.FullName,
                    UserName = user.UserName,
                    DefaultCurrency = user.CurrencyID,
                    DefaultLanguage = user.LanguageID
                });
            }

            return userList;
        }

        public async Task<UserAC> GetCurrentUserAsync(string userId)
        {
            var user = await _userManager.Users.Where(u => u.Id.Equals(userId)).FirstOrDefaultAsync();

            UserAC currentUser = new UserAC
            {
                Id = user.Id,
                FullName = user.FullName,
                UserName = user.UserName,
                DefaultCurrency = user.CurrencyID,
                DefaultLanguage = user.LanguageID
            };
            return currentUser;
        }

        public async Task<UserAC> GetUserByIdAsync(string userId)
        {
            var user = await _userManager.Users.Where(u => u.Id.Equals(userId)).FirstOrDefaultAsync();

            UserAC userById = new UserAC
            {
                Id = user.Id,
                FullName = user.FullName,
                UserName = user.UserName,
                DefaultCurrency = user.CurrencyID,
                DefaultLanguage = user.LanguageID
            };

            return userById;
        }

        //public Task CreateUserAsync(ApplicationUser user)
        //{
        //    throw new NotImplementedException();
        //}

        public async Task<Boolean> EditUserAsync(UserAC user)
        {
            var userData = await _userManager.FindByIdAsync(user.Id);
            if (userData != null)
            {
                userData.FullName = user.FullName;
                userData.UserName = user.UserName;
                userData.LanguageID = user.DefaultLanguage;
                userData.CurrencyID = user.DefaultCurrency;

                await _userManager.UpdateAsync(userData);

                return true;
            }
            return false;
        }

        public async Task<Boolean> DeleteUserAsync(string userId)
        {
            var userToDelete = await _context.Users.Where(u => u.Id.Equals(userId)).FirstOrDefaultAsync();
            if (userToDelete != null)
            {
                _context.Users.Remove(userToDelete);
                return true;
            }
            return false;
        }

        public async Task<float?> TotalLentAsync(string userId)
        {
            var lentMoney = await _context.UserExpenseMappers.Where(u => u.Expenses.Payee.Equals(userId)).Where(u => !u.FromUser.Equals(userId)).Select(u => u.Amount).ToListAsync();
            return lentMoney.Sum();
        }

        public async Task<float?> TotalBorrowedAsync(string userId)
        {
            var borrowedMoney = await _context.UserExpenseMappers.Where(u => u.FromUser.Equals(userId)).Where(u => !u.Expenses.Payee.Equals(userId)).Select(u => u.Amount).ToListAsync();
            return borrowedMoney.Sum();
        }

        public async Task<IEnumerable<UserAC>> GetAllfriendsAsync(string userId)
        {
            var friends = await _context.Friends.Where(f => f.UserID.Equals(userId) || f.FriendID.Equals(userId)).ToListAsync();
            List<UserAC> friendList = new List<UserAC>();

            foreach (var friend in friends)
            {
                if (friend.FriendID.Equals(userId))
                {
                    friendList.Add(new UserAC
                    {
                        Id = friend.UserID,
                        FullName = _userManager.FindByIdAsync(friend.UserID).Result.FullName,
                        UserName = _userManager.FindByIdAsync(friend.UserID).Result.UserName
                    });
                }
                else
                {
                    friendList.Add(new UserAC
                    {
                        Id = friend.FriendID,
                        FullName = _userManager.FindByIdAsync(friend.FriendID).Result.FullName,
                        UserName = _userManager.FindByIdAsync(friend.FriendID).Result.UserName
                    });
                }
            }

            return friendList;
        }

        public async Task<Friend> GetFriendByIdAsync(string userId, string friendId)
        {
            var friendById = await _context.Friends.Where(u => u.UserID == userId).Where(f => f.FriendID == friendId).FirstOrDefaultAsync();
            return friendById;
        }

        public async Task AddFriendAsync(string userId, List<UserAC> friend)
        {
            Friend friendToAdd = new Friend();
            var friends = await _context.Friends.Where(f => f.UserID.Equals(userId) || f.FriendID.Equals(userId)).ToListAsync();
            var users = await _context.Users.Select(u => u.UserName).ToListAsync();

            foreach (var friendData in friend)
            {
                if (!friends.Any(f => f.FriendID.Equals(_userManager.FindByNameAsync(friendData.UserName).Result.Id) || f.UserID.Equals(_userManager.FindByNameAsync(friendData.UserName).Result.Id)))
                {
                    friendToAdd.UserID = userId;

                    ApplicationUser newUser = new ApplicationUser
                    {
                        FullName = friendData.FullName,
                        UserName = friendData.UserName
                    };

                    if (users.Contains(friendData.UserName))
                    {
                        friendToAdd.FriendID = _userManager.FindByNameAsync(friendData.UserName).Result.Id;
                    }
                    else
                    {
                        var result = await _userManager.CreateAsync(newUser, "DefaultPassword");

                        if (result.Succeeded)
                        {
                            friendToAdd.FriendID = _userManager.FindByNameAsync(friendData.UserName).Result.Id;
                        }
                    }
                    await _context.Friends.AddAsync(friendToAdd);
                }
            }
        }

        //public async Task EditfriendAsync(string userId, UserAC friend)
        //{
        //    throw new NotImplementedException();
        //}

        public async Task<Boolean> RemoveFriendAsync(string userId, string friendId)
        {
            var friendToRemove = await _context.Friends.Where(f => f.FriendID.Equals(friendId) || f.FriendID.Equals(userId)).Where(u => u.UserID.Equals(userId) || u.UserID.Equals(friendId)).FirstOrDefaultAsync();
            if (friendToRemove != null)
            {
                _context.Friends.Remove(friendToRemove);
                return true;
            }
            return false;
        }

        public async Task<IEnumerable<Activity>> GetAllActivitiesAsync(string userId)
        {
            var activities = await _context.Activities.Where(a => a.UserID.Equals(userId)).ToListAsync();

            return activities.OrderBy(a => a.Date);
        }

        public async Task<Boolean> RemoveActivityAsync(int activityId)
        {
            var activity = await _context.Activities.Where(a => a.ID == activityId).FirstOrDefaultAsync();
            if (activity != null)
            {
                _context.Activities.Remove(activity);
                await _context.SaveChangesAsync();
                return true;
            }
            return false;
        }

        public void Dispose()
        {
            throw new NotImplementedException();
        }

        #endregion
    }
}
