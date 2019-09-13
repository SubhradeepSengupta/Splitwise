using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Splitwise.DomainModel.Models;
using Splitwise.Repository.ApplicationClasses;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;

namespace Splitwise.Core.ActionFilters
{
    public class UserAccessFilter : ActionFilterAttribute
    {

        #region Private Variables

        #region Dependencies

        private readonly UserManager<ApplicationUser> _userManager;
        private readonly ApplicationDbContext _context;

        #endregion

        #endregion

        #region Constructor

        public UserAccessFilter(UserManager<ApplicationUser> userManager, ApplicationDbContext context)
        {
            this._userManager = userManager;
            this._context = context;
        }

        #endregion

        #region IActionFilter Methods

        public override void OnActionExecuting(ActionExecutingContext context)
        {
            string actionName = (string)context.RouteData.Values["Action"];
            string currentUserId = _userManager.FindByNameAsync(context.HttpContext.User.Identity.Name).Result.Id;
            //string actionName = context.ActionDescriptor.ActionName.ToString();
            //string currentUserId = _userManager.FindByNameAsync(context.RequestContext.Principal.Identity.Name).Result.Id;

            List<Group> groupList = _context.Groups.ToList();

            if (actionName.Equals("EditGroupAsync"))
            {
                UserGroupAC model = context.ActionArguments["group"] as UserGroupAC;

                if (currentUserId.Equals(model.CreatedByID))
                {
                    context.HttpContext.Response.StatusCode = (int)System.Net.HttpStatusCode.Accepted;
                    context.Result = new EmptyResult();
                }
                else
                {
                    context.HttpContext.Response.StatusCode = (int)System.Net.HttpStatusCode.Unauthorized;
                    context.Result = new EmptyResult();
                }
            }
            else if (actionName.Equals("DeleteGroupAsync"))
            {
                int groupId = (int)context.ActionArguments["groupId"];

                if ((groupList.Where(g => g.ID == groupId).Select(g => g.CreatedBy).FirstOrDefault()).Equals(currentUserId))
                {
                    context.HttpContext.Response.StatusCode = (int)System.Net.HttpStatusCode.Accepted;
                    context.Result = new EmptyResult();
                }
                else
                {
                    context.HttpContext.Response.StatusCode = (int)System.Net.HttpStatusCode.Unauthorized;
                    context.Result = new EmptyResult();
                }
            }

            base.OnActionExecuting(context);
        }
        #endregion
    }
}
