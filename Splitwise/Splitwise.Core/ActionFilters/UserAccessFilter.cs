using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.EntityFrameworkCore;
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
            string controllerName = (string)context.RouteData.Values["Controller"];
            string actionName = (string)context.RouteData.Values["Action"];
            string currentUserId = _userManager.FindByNameAsync(context.HttpContext.User.Identity.Name).Result.Id;

            if (controllerName.Equals("Group"))
            {
                List<Group> groupList = _context.Groups.ToList();

                if (actionName.Equals("EditGroupAsync"))
                {
                    UserGroupAC model = context.ActionArguments["group"] as UserGroupAC;

                    if (currentUserId.Equals(model.CreatedByID))
                    {
                        context.HttpContext.Response.StatusCode = (int)System.Net.HttpStatusCode.Accepted;
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
                    }
                    else
                    {
                        context.HttpContext.Response.StatusCode = (int)System.Net.HttpStatusCode.Unauthorized;
                        context.Result = new EmptyResult();
                    }
                }
            }
            else if (controllerName.Equals("Expense"))
            {
                if (actionName.Equals("EditExpenseAsync"))
                {
                    int groupId = (int)context.ActionArguments["groupId"];
                    IndividualExpenseAC expense = context.ActionArguments["expense"] as IndividualExpenseAC;

                    if (expense.Payer.Any(p => p.UserID.Equals(currentUserId)))
                    {
                        context.HttpContext.Response.StatusCode = (int)System.Net.HttpStatusCode.Accepted;
                    }
                    else
                    {
                        context.HttpContext.Response.StatusCode = (int)System.Net.HttpStatusCode.Unauthorized;
                        context.Result = new EmptyResult();
                    }
                }
                else if (actionName.Equals("RemoveExpenseAsync"))
                {
                    int groupId = (int)context.ActionArguments["groupId"];
                    int expenseId = (int)context.ActionArguments["expenseId"];

                    List<string> payersId = _context.UserExpenseMappers.Where(e => e.ExpenseID == expenseId).Select(e => e.FromUser).ToList();

                    if (payersId.Contains(currentUserId))
                    {
                        context.HttpContext.Response.StatusCode = (int)System.Net.HttpStatusCode.Accepted;
                    }
                    else
                    {
                        context.HttpContext.Response.StatusCode = (int)System.Net.HttpStatusCode.Unauthorized;
                        context.Result = new EmptyResult();
                    }
                }
                else if (actionName.Equals("SettlementAsync"))
                {
                    SettlementAC settlement = context.ActionArguments["settlement"] as SettlementAC;

                    if(settlement.Payee.Equals(currentUserId) || settlement.Payer.Equals(currentUserId))
                    {
                        context.HttpContext.Response.StatusCode = (int)System.Net.HttpStatusCode.Accepted;
                    }
                    else
                    {
                        context.HttpContext.Response.StatusCode = (int)System.Net.HttpStatusCode.Unauthorized;
                        context.Result = new EmptyResult();
                    }
                }
            }
            base.OnActionExecuting(context);
        }
        #endregion
    }
}
