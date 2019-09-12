using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Splitwise.DomainModel.Models;
using Splitwise.Repository.ApplicationClasses;
using Splitwise.Repository.Unit;
using System.Collections.Generic;
using System.Threading.Tasks;
using Splitwise.Core.ActionFilters;

namespace Splitwise.Core.Controllers
{
    [Route("api/[Controller]")]
    [ApiController]
    [Authorize]
    public class GroupController : ControllerBase
    {

        #region Private Variables

        private readonly UnitOfWork unitOfWork;

        #region Dependencies

        private readonly ApplicationDbContext _context;
        private readonly UserManager<ApplicationUser> _userManager;

        #endregion

        #endregion

        #region Constructor

        public GroupController(ApplicationDbContext context, UserManager<ApplicationUser> userManager)
        {
            unitOfWork = new UnitOfWork(context, userManager);
            this._context = context;
            this._userManager = userManager;
        }

        #endregion

        #region Public Methods


        [HttpGet]
        [Route("category")]
        public async Task<IActionResult> GetAllCategories()
        {
            return Ok(await unitOfWork.Group.GetAllCategoriesASync());
        }

        [HttpGet]
        [Route("groups")]
        public async Task<IActionResult> GetAllGroupsAsync()
        {
            if (User.Identity.IsAuthenticated)
            {
                var loggedInUser = _userManager.FindByNameAsync(User.Identity.Name);
                var userId = loggedInUser.Result.Id;

                return Ok(await unitOfWork.Group.GetAllGroupsAsync(userId));
            }
            return RedirectToAction("Index", "Home");
        }

        [HttpGet]
        [Route("groups/{groupId}")]
        public async Task<IActionResult> GetGroupByIdAsync([FromRoute] int groupId)
        {
            if (User.Identity.IsAuthenticated)
            {
                var loggedInUser = _userManager.FindByNameAsync(User.Identity.Name);
                var userId = loggedInUser.Result.Id;

                return Ok(await unitOfWork.Group.GetGroupByIdAsync(userId, groupId));
            }
            return RedirectToAction("Index", "Home");
        }

        [HttpPost]
        [Route("groups")]
        public async Task<IActionResult> CreateGroupAsync([FromBody] CreateGroupAC group)
        {
            if (User.Identity.IsAuthenticated)
            {
                var loggedInUser = _userManager.FindByNameAsync(User.Identity.Name);
                var userId = loggedInUser.Result.Id;

                await unitOfWork.Group.CreateGroupAsync(group, userId);
                await unitOfWork.SaveAsync();
            }
            return Ok(group);
        }

        [ServiceFilter(typeof(UserAccessFilter))]
        [HttpPut]
        [Route("groups")]
        public async Task<IActionResult> EditGroupAsync([FromBody] UserGroupAC group)
        {
            var returnResult = await unitOfWork.Group.EditGroupAsync(group);
            if (returnResult)
            {
                await unitOfWork.SaveAsync();
                return Ok(group);
            }
            return NotFound("Group not found");
        }

        [ServiceFilter(typeof(UserAccessFilter))]
        [HttpDelete]
        [Route("groups/{groupId}")]
        public async Task<IActionResult> DeleteGroupAsync([FromRoute] int groupId)
        {
            var returnResult = await unitOfWork.Group.DeleteGroupAsync(groupId);
            if (returnResult)
            {
                await unitOfWork.SaveAsync();
                return Ok(groupId);
            }
            return NotFound("Group not found");
        }

        [HttpPost]
        [Route("groups/{groupId}")]
        public async Task<IActionResult> AddUserToGroupAsync([FromRoute] int groupId, [FromBody] List<CreateUserAC> user)
        {
            string currentUserId = _userManager.FindByNameAsync(User.Identity.Name).Result.Id;
            await unitOfWork.Group.AddUserToGroupAsync(groupId, currentUserId, user);
            await unitOfWork.SaveAsync();
            return Ok(new { groupId, user });
        }

        #endregion
    }
}
