using Splitwise.DomainModel.Models;
using Splitwise.Repository.ApplicationClasses;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Splitwise.Repository.Group
{
    public interface IGroupRepository : IDisposable
    {
        Task<IEnumerable<Category>> GetAllCategoriesASync();
        Task<IEnumerable<UserGroupAC>> GetAllGroupsAsync(string userId);
        Task<UserGroupAC> GetGroupByIdAsync(string userId, int groupId);
        Task CreateGroupAsync(CreateGroupAC group, string userId);
        Task<Boolean> EditGroupAsync(UserGroupAC group);
        Task<Boolean> DeleteGroupAsync(int groupId);
        Task AddUserToGroupAsync(int groupId, string currentUserId, List<CreateUserAC> user);
        Task SaveChangesAsync();
    }
}
