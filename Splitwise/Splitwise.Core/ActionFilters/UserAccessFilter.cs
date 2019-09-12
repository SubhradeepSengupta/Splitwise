using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.EntityFrameworkCore;
using Splitwise.DomainModel.Models;
using Splitwise.Repository.ApplicationClasses;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Web.Http;

namespace Splitwise.Core.ActionFilters
{
    public class UserAccessFilter : Attribute, IActionFilter
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

        public void OnActionExecuting(ActionExecutingContext context)
        {
            string actionName = (string)context.RouteData.Values["Action"];
            string currentUserId = _userManager.FindByNameAsync(context.HttpContext.User.Identity.Name).Result.Id;
            List<Group> groupList = _context.Groups.ToList();

            if (actionName.Equals("EditGroupAsync"))
            {
                UserGroupAC model = context.ActionArguments["group"] as UserGroupAC;

                if (currentUserId.Equals(model.CreatedByID))
                {
                    return;
                }
                else
                {
                    throw new HttpResponseException(new HttpResponseMessage(System.Net.HttpStatusCode.Unauthorized));
                }
            }
            else if (actionName.Equals("DeleteGroupAsync"))
            {
                int groupId = (int)context.ActionArguments["groupId"];

                if ((groupList.Where(g => g.ID == groupId).Select(g => g.CreatedBy).FirstOrDefault()).Equals(currentUserId))
                {
                    return;
                }
                else
                {
                    throw new HttpResponseException(new HttpResponseMessage(System.Net.HttpStatusCode.Unauthorized));
                }
            }
        }

        public void OnActionExecuted(ActionExecutedContext context)
        {
            return;
        }

        #endregion
    }
}
