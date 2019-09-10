using Splitwise.DomainModel.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Splitwise.Repository.User
{
    public interface IUserRepository : IDisposable
    {
        Task<IEnumerable<UserAC>> GetAllUsersAsync();
        Task<UserAC> GetCurrentUserAsync(string userId);
        Task<UserAC> GetUserByIdAsync(string userId);
        //Task CreateUserAsync(ApplicationUser user);
        Task<Boolean> EditUserAsync(UserAC user);
        Task<Boolean> DeleteUserAsync(string userId);
        Task<float?> TotalLentAsync(string userId);
        Task<float?> TotalBorrowedAsync(String userId);


        Task<IEnumerable<UserAC>> GetAllfriendsAsync(string userId);
        Task<Friend> GetFriendByIdAsync(string userId, string friendId);
        Task AddFriendAsync(string userId, List<UserAC> friend);
        //Task EditfriendAsync(string userId, UserAC friend);
        Task<Boolean> RemoveFriendAsync(string userId, string friendId);

        Task<IEnumerable<Activity>> GetAllActivitiesAsync(string userId);

        Task<Boolean> RemoveActivityAsync(int activityId);
    }
}
