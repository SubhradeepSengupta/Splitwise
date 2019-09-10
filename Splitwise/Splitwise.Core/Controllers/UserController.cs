using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Splitwise.DomainModel.Models;
using Splitwise.Repository;
using Splitwise.Repository.Unit;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Splitwise.Core.Controllers
{
    [Route("api/[Controller]")]
    [ApiController]
    [Authorize]
    public class UserController : ControllerBase
    {
        
        #region Private variables

        private readonly UnitOfWork unitOfWork;

        #region Dependencies

        private readonly ApplicationDbContext _context;
        private readonly UserManager<ApplicationUser> _userManager;

        #endregion

        #endregion

        #region Constructors

        public UserController(ApplicationDbContext context, UserManager<ApplicationUser> userManager)
        {
            unitOfWork = new UnitOfWork(context, userManager);
            this._context = context;
            this._userManager = userManager;
        }

        #endregion

        #region Public Methods

        [HttpGet]
        [Route("users")]
        public async Task<IActionResult> GetAllUsersAsync()
        {
            return Ok(await unitOfWork.User.GetAllUsersAsync());
        }

        [HttpGet]
        [Route("current-user")]
        public async Task<IActionResult> GetCurrentUserAsync()
        {
            string Id = "";

            if (User.Identity.IsAuthenticated)
            {
                var LoggedInUser = _userManager.FindByNameAsync(User.Identity.Name);
                Id = LoggedInUser.Result.Id;
            }
            return Ok(await unitOfWork.User.GetCurrentUserAsync(Id));
        }

        [HttpGet]
        [Route("users/{userId}")]
        public async Task<IActionResult> GetUserByIdAsync([FromRoute] string userId)
        {
            return Ok(await unitOfWork.User.GetUserByIdAsync(userId));
        }

        [HttpPut]
        [Route("users")]
        public async Task<IActionResult> EditUserAsync([FromBody] UserAC user)
        {
            var returnResult = await unitOfWork.User.EditUserAsync(user);
            if(returnResult)
            {
                await unitOfWork.SaveAsync();
                return Ok(user);
            }
            return NotFound("User not found");
        }

        [HttpDelete]
        [Route("users/{userId}")]
        public async Task<IActionResult> DeleteUserAsync([FromRoute] string userId)
        {
            var returnResult = await unitOfWork.User.DeleteUserAsync(userId);
            if(returnResult)
            {
                await unitOfWork.SaveAsync();
                return Ok(userId);
            }
            return NotFound("User not found");
        }


        [HttpGet]
        [Route("users/{userId}/total-lent")]
        public async Task<IActionResult> TotalLentAsync([FromRoute] string userId)
        {
            return Ok(await unitOfWork.User.TotalLentAsync(userId));
        }


        [HttpGet]
        [Route("users/{userId}/total-borrowed")]
        public async Task<IActionResult> TotalBorrowedAsync([FromRoute] string userId)
        {
            return Ok(await unitOfWork.User.TotalBorrowedAsync(userId));
        }

        [HttpGet]
        [Route("users/{userId}/friends")]
        public async Task<IActionResult> GetAllFriendsAsync([FromRoute] string userId)
        {
            return Ok(await unitOfWork.User.GetAllfriendsAsync(userId));
        }

        [HttpGet]
        [Route("users/{userId}/friends/{friendId}")]
        public async Task<IActionResult> GetFriendByIdAsync([FromRoute] string userId, [FromRoute] string friendId)
        {
            return Ok(await unitOfWork.User.GetFriendByIdAsync(userId, friendId));
        }

        [HttpPost]
        [Route("users/{userId}/friends")]
        public async Task<IActionResult> AddFriendAsync([FromRoute] string userId, [FromBody] List<UserAC> user)
        {
            await unitOfWork.User.AddFriendAsync(userId, user);
            await unitOfWork.SaveAsync();
            return Ok(user);
        }

        //[HttpPut]
        //[Route("{userId}/friends")]
        //public async Task<IActionResult> EditFriendAsync([FromRoute] string userId, [FromBody] UserAC user)
        //{
        //    await unitOfWork.User.EditfriendAsync(userId, user);
        //    unitOfWork.SaveAsync();
        //    return Ok(user);
        //}

        [HttpDelete("users/{userId}/friends/{friendId}")]
        public async Task<IActionResult> RemoveFriendAsync([FromRoute] string userId, [FromRoute] string friendId)
        {
            var returnResult = await unitOfWork.User.RemoveFriendAsync(userId, friendId);
            if(returnResult)
            {
                await unitOfWork.SaveAsync();
                return Ok();
            }
            return NotFound("User or Friend not found");
        }

        [HttpGet]
        [Route("current-user/activities")]
        public async Task<IActionResult> GetAllActivitiesAsync()
        {
            string currentUserId = _userManager.FindByNameAsync(User.Identity.Name).Result.Id;
            return Ok(await unitOfWork.User.GetAllActivitiesAsync(currentUserId));
        }

        [HttpDelete]
        [Route("current-user/activities/{activityId}")]
        public async Task<IActionResult> RemoveActivityAsync([FromRoute] int activityId)
        {
            var returnResult = await unitOfWork.User.RemoveActivityAsync(activityId);
            if (returnResult)
            {
                return Ok();
            }
            return NotFound("Activity not found");
        }

        #endregion
    }
}
