using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Splitwise.Core.ActionFilters;
using Splitwise.DomainModel.Models;
using Splitwise.Repository.ApplicationClasses;
using Splitwise.Repository.Unit;
using System.Threading.Tasks;

namespace Splitwise.Core.Controllers
{
    [Route("api/[Controller]")]
    [ApiController]
    [Authorize]
    public class ExpenseController : ControllerBase
    {

        #region Private Variables

        private readonly UnitOfWork unitOfWork;

        #region Dependencies

        private readonly ApplicationDbContext _context;
        private readonly UserManager<ApplicationUser> _userManager;

        #endregion

        #endregion


        #region Constructors

        public ExpenseController(ApplicationDbContext context, UserManager<ApplicationUser> userManager)
        {
            unitOfWork = new UnitOfWork(context, userManager);
            this._context = context;
            this._userManager = userManager;
        }

        #endregion


        #region Public Methods

        [HttpGet]
        [Route("groups/{groupId}/expenses")]
        public async Task<IActionResult> GetAllExpensesAsync([FromRoute] int groupId)
        {
            return Ok(await unitOfWork.Expense.GetAllExpensesAsync(groupId));
        }

        [HttpGet]
        [Route("groups/{groupId}/expenses/{expenseId}")]
        public async Task<IActionResult> GetExpenseByIdAsync([FromRoute] int groupId, [FromRoute] int expenseId)
        {
            return Ok(await unitOfWork.Expense.GetExpenseByIdAsync(groupId, expenseId));
        }

        [HttpGet]
        [Route("groups/{groupId}/expenses/{payerId}/{payeeId}")]
        public async Task<IActionResult> GetExpenseByUserAsync([FromRoute] int groupId, [FromRoute] string payerId, [FromRoute] string payeeId)
        {
            return Ok(await unitOfWork.Expense.GetExpenseByUserAsync(groupId, payerId, payeeId));
        }

        [HttpPost]
        [Route("groups/{groupId}/expenses")]
        public async Task<IActionResult> CreateExpenseAsync([FromRoute] int groupId, [FromBody] CreateExpenseAC expense)
        {
            string currentUserId = _userManager.FindByNameAsync(User.Identity.Name).Result.Id;
            await unitOfWork.Expense.CreateExpenseAsync(groupId, currentUserId, expense);
            await unitOfWork.SaveAsync();
            return Ok(expense);
        }

        [ServiceFilter(typeof(UserAccessFilter))]
        [HttpPut]
        [Route("groups/{groupId}/expenses")]
        public async Task<IActionResult> EditExpenseAsync([FromRoute] int groupId, [FromBody] IndividualExpenseAC expense)
        {
            var returnValue = await unitOfWork.Expense.EditExpenseAsync(groupId, expense);
            if (returnValue)
            {
                await unitOfWork.SaveAsync();
                return Ok(expense);
            }
            else
            {
                return NotFound("Group or expense not found");
            }
        }

        [ServiceFilter(typeof(UserAccessFilter))]
        [HttpDelete]
        [Route("groups/{groupId}/expenses/{expenseId}")]
        public async Task<IActionResult> RemoveExpenseAsync([FromRoute] int groupId, [FromRoute] int expenseId)
        {
            string currentUserId = _userManager.FindByNameAsync(User.Identity.Name).Result.Id;
            var returnValue = await unitOfWork.Expense.DeleteExpenseAsync(groupId, currentUserId, expenseId);
            if (returnValue)
            {
                await unitOfWork.SaveAsync();
                return Ok(new { groupId, expenseId });
            }
            else
            {
                return NotFound("Group or expense not found");
            }
        }

        [HttpGet]
        [Route("non-group-expenses")]
        public async Task<IActionResult> GetNonGroupExpensesAsync()
        {
            var loggenInUserId = _userManager.FindByNameAsync(User.Identity.Name).Result.Id;
            return Ok(await unitOfWork.Expense.GetAllNonGroupExpenses(loggenInUserId));
        }

        [ServiceFilter(typeof(UserAccessFilter))]
        [HttpPost]
        [Route("settlement")]
        public async Task<IActionResult> SettlementAsync([FromBody] SettlementAC settlement)
        {
            await unitOfWork.Expense.SettlementAsync(settlement);
            return Ok(settlement);
        }

        #endregion
    }
}
