using Splitwise.DomainModel.Models;
using Splitwise.Repository.ApplicationClasses;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Splitwise.Repository.Expense
{
    interface IExpenseRepository : IDisposable
    {
        Task<IEnumerable<ExpenseDetails>> GetAllExpensesAsync(int groupId);
        Task<IndividualExpenseAC> GetExpenseByIdAsync(int groupId, int expenseId);
        Task<float> GetExpenseByUserAsync(int groupId, string payerId, string payeeId);
        Task CreateExpenseAsync(int groupId, string currentUserId, CreateExpenseAC expense);
        Task<Boolean> EditExpenseAsync(int groupId, IndividualExpenseAC expense);
        Task<Boolean> DeleteExpenseAsync(int groupId, string currentUserId, int expenseId);
        Task<IEnumerable<ExpenseDetails>> GetAllNonGroupExpenses(string userId);
        Task SettlementAsync(SettlementAC settlement);
        Task SaveAsync();
    }
}
