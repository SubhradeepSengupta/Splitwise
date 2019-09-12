using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Splitwise.DomainModel.Models;
using Splitwise.Repository.ApplicationClasses;
using Splitwise.Repository.Group;

namespace Splitwise.Repository.Expense
{
    public class ExpenseRepository : IExpenseRepository
    {
        #region Private Variables

        #region Dependencies

        private readonly ApplicationDbContext _context;
        private readonly UserManager<ApplicationUser> _userManager;

        #endregion

        #endregion

        #region Constructors

        public ExpenseRepository(ApplicationDbContext context, UserManager<ApplicationUser> userManager)
        {
            this._context = context;
            this._userManager = userManager;
        }

        #endregion

        #region IExpenseRepository methods

        public async Task<IEnumerable<ExpenseDetails>> GetAllExpensesAsync(int groupId)
        {
            var expenses = await _context.UserExpenseMappers.Where(u => u.Expenses.GroupID == groupId).Where(u => u.Expenses.IsDeleted == false).Include(u => u.Expenses).ToListAsync();
            var expenseList = new List<ExpenseDetails>();

            foreach (var expense in expenses)
            {
                if (!expense.FromUser.Equals(expense.Expenses.Payee))
                {
                    expenseList.Add(new ExpenseDetails
                    {
                        ID = expense.ExpenseID,
                        ExpenseName = expense.Expenses.Name,
                        Date = expense.Expenses.Date,
                        Amount = expense.Amount,
                        TotalAmount = expense.Expenses.TotalAmount,
                        PayerID = expense.FromUser,
                        Payer = _userManager.FindByIdAsync(expense.FromUser).Result.FullName,
                        PayeeID = expense.Expenses.Payee,
                        Payee = _userManager.FindByIdAsync(expense.Expenses.Payee).Result.FullName
                    });
                }
            }
            return expenseList;
        }

        public async Task<IndividualExpenseAC> GetExpenseByIdAsync(int groupId, int expenseId)
        {
            var expense = await _context.GroupExpenseMappers.Where(g => g.GroupID == groupId).Where(g => g.ID == expenseId).Where(g => g.IsDeleted == false).FirstOrDefaultAsync();
            var userExpenseData = await _context.UserExpenseMappers.Where(u => u.ExpenseID == expenseId).Where(u => u.Expenses.GroupID == groupId).Where(u => u.Expenses.IsDeleted == false).ToListAsync();

            var expenseData = new IndividualExpenseAC
            {
                ExpenseID = expense.ID,
                ExpenseName = expense.Name,
                Date = expense.Date,
                TotalAmount = expense.TotalAmount,
                PayeeID = expense.Payee,
                SplitType = expense.SplitType,
                Note = expense.Description,
                Payer = new List<IncludedUser>()
            };

            foreach (var expenses in userExpenseData)
            {
                if (expense.SplitType.Equals("Percentage"))
                {
                    expenseData.Payer.Add(new IncludedUser
                    {
                        UserID = expenses.FromUser,
                        UserName = _userManager.FindByIdAsync(expenses.FromUser).Result.FullName,
                        Percentage = ((expenses.Amount * 100) / expense.TotalAmount)
                    });
                }
                else
                {
                    expenseData.Payer.Add(new IncludedUser
                    {
                        UserID = expenses.FromUser,
                        UserName = _userManager.FindByIdAsync(expenses.FromUser).Result.FullName,
                        UserAmount = expenses.Amount
                    });
                }
            }

            return expenseData;
        }

        public async Task<float> GetExpenseByUserAsync(int groupId, string payerId, string payeeId)
        {
            float totalAmount = 0.0F;

            if (groupId != 0)
            {
                var expenses = await _context.UserExpenseMappers.Where(u => u.Expenses.Payee.Equals(payeeId) && u.FromUser.Equals(payerId)).Select(u => u.Amount).ToListAsync();
                totalAmount = (float)expenses.Sum();
            }
            else
            {
                var expenses = await _context.UserExpenseMappers.Where(u => u.Expenses.Payee.Equals(payeeId) && u.FromUser.Equals(payerId)).Where(g => g.Expenses.GroupID == null).Select(u => u.Amount).ToListAsync();
                totalAmount = (float)expenses.Sum();
            }
            return totalAmount;
        }

        public async Task CreateExpenseAsync(int groupId, string currentUserId, CreateExpenseAC expense)
        {
            Activity activity = new Activity();
            var currentGroupName = await _context.Groups.Where(g => g.ID == groupId).Select(g => g.Name).FirstOrDefaultAsync();

            GroupExpenseMapper groupExpenseMapper = new GroupExpenseMapper();

            groupExpenseMapper.Name = expense.Name;
            groupExpenseMapper.SplitType = expense.SplitType;
            if (groupId == 0)
            {
                groupExpenseMapper.Payee = _userManager.FindByIdAsync(expense.Payee).Result.Id;
            }
            else
            {
                groupExpenseMapper.GroupID = groupId;
                groupExpenseMapper.Payee = expense.Payee;

            }
            groupExpenseMapper.TotalAmount = expense.Amount;
            groupExpenseMapper.Date = expense.Date;
            groupExpenseMapper.Description = expense.Note;
            groupExpenseMapper.IsDeleted = false;
            groupExpenseMapper.IsSettled = false;

            activity.UserID = currentUserId;
            activity.Date = DateTime.Now;
            activity.Description = $"You created the expense {groupExpenseMapper.Name} in {currentGroupName}";

            await _context.Activities.AddAsync(activity);
            await _context.GroupExpenseMappers.AddAsync(groupExpenseMapper);

            foreach (var expenses in expense.IncludedUsers)
            {
                if (expenses.Percentage == null)
                {
                    UserExpenseMapper userExpenseMapper = new UserExpenseMapper();

                    userExpenseMapper.ExpenseID = groupExpenseMapper.ID;

                    if (expenses.UserID == null)
                    {
                        userExpenseMapper.FromUser = _userManager.FindByNameAsync(expenses.UserName).Result.Id;
                    }
                    else
                    {
                        userExpenseMapper.FromUser = expenses.UserID;
                    }

                    if (expense.SplitType.Equals("Equal"))
                    {
                        userExpenseMapper.Amount = (expense.Amount/expense.IncludedUsers.Count());
                    }
                    else
                    {
                        userExpenseMapper.Amount = expenses.UserAmount;
                    }

                    await _context.UserExpenseMappers.AddAsync(userExpenseMapper);
                }
                else
                {
                    UserExpenseMapper userExpenseMapper = new UserExpenseMapper();

                    userExpenseMapper.ExpenseID = groupExpenseMapper.ID;
                    if (expenses.UserID == null)
                    {
                        userExpenseMapper.FromUser = _userManager.FindByNameAsync(expenses.UserName).Result.Id;
                    }
                    else
                    {
                        userExpenseMapper.FromUser = expenses.UserID;
                    }
                    userExpenseMapper.Amount = ((expense.Amount * expenses.Percentage) / 100);

                    await _context.UserExpenseMappers.AddAsync(userExpenseMapper);
                }
            }
        }

        public async Task<Boolean> EditExpenseAsync(int groupId, IndividualExpenseAC expense)
        {
            var groupExpense = await _context.GroupExpenseMappers.Where(g => g.GroupID == groupId).FirstOrDefaultAsync();
            var userExpenses = await _context.UserExpenseMappers.Where(u => u.Expenses.GroupID == groupId).Where(u => u.ExpenseID == expense.ExpenseID).ToListAsync();

            if (groupExpense != null)
            {
                groupExpense.Name = expense.ExpenseName;
                groupExpense.Date = expense.Date;
                groupExpense.TotalAmount = expense.TotalAmount;
                groupExpense.SplitType = expense.SplitType;
                groupExpense.Payee = expense.PayeeID;
                groupExpense.Description = expense.Note;

                _context.GroupExpenseMappers.Update(groupExpense);
                _context.UserExpenseMappers.RemoveRange(userExpenses);
                await _context.SaveChangesAsync();

                foreach (var user in expense.Payer)
                {
                    if (user.Percentage == null)
                    {
                        UserExpenseMapper userExpenseMapper = new UserExpenseMapper
                        {
                            ExpenseID = groupExpense.ID,
                            FromUser = user.UserID,
                            Amount = user.UserAmount
                        };
                        await _context.UserExpenseMappers.AddAsync(userExpenseMapper);
                    }
                    else
                    {
                        UserExpenseMapper userExpenseMapper = new UserExpenseMapper
                        {
                            ExpenseID = groupExpense.ID,
                            FromUser = user.UserID,
                            Amount = ((expense.TotalAmount * user.Percentage) / 100)
                        };

                        await _context.UserExpenseMappers.AddAsync(userExpenseMapper);
                    }
                }
                return true;
            }
            return false;
        }

        public async Task<Boolean> DeleteExpenseAsync(int groupId, string currentUserId, int expenseId)
        {
            Activity activity = new Activity();
            List<UserExpenseMapper> userExpense = new List<UserExpenseMapper>();

            if (groupId == 0)
            {
                userExpense = await _context.UserExpenseMappers.Where(u => u.Expenses.GroupID == null).Where(u => u.ExpenseID == expenseId).ToListAsync();
            }
            else
            {
                userExpense = await _context.UserExpenseMappers.Where(u => u.Expenses.GroupID == groupId).Where(u => u.ExpenseID == expenseId).ToListAsync();
            }
            if (userExpense != null)
            {
                foreach (var expense in userExpense)
                {
                    _context.UserExpenseMappers.Remove(expense);
                    await SaveAsync();
                }

                GroupExpenseMapper groupExpense = new GroupExpenseMapper();
                if (groupId == 0)
                {
                    groupExpense = await _context.GroupExpenseMappers.Where(g => g.ID == expenseId).Where(g => g.GroupID == null).Include(g => g.Groups).FirstOrDefaultAsync();
                }
                else
                {
                    groupExpense = await _context.GroupExpenseMappers.Where(g => g.ID == expenseId).Where(g => g.GroupID == groupId).Include(g => g.Groups).FirstOrDefaultAsync();
                }

                if (groupExpense != null)
                {
                    groupExpense.IsDeleted = true;

                    activity.UserID = currentUserId;
                    activity.Date = DateTime.Now;

                    if (groupId == 0)
                    {
                        activity.Description = $"You deleted {groupExpense.Name} nongroup expense";
                    }
                    else
                    {
                        activity.Description = $"You deleted {groupExpense.Name} expense from {groupExpense.Groups.Name}";
                    }

                    _context.GroupExpenseMappers.Update(groupExpense);
                    await _context.Activities.AddAsync(activity);
                    await SaveAsync();
                    return true;
                }
                return false;
            }
            return false;
        }

        public async Task<IEnumerable<ExpenseDetails>> GetAllNonGroupExpenses(string userId)
        {
            var nonGroupExpense = await _context.UserExpenseMappers.Where(u => u.Expenses.Payee.Equals(userId) || u.FromUser.Equals(userId)).Where(u => u.Expenses.GroupID == null).Include(u => u.Expenses).ToListAsync();
            List<ExpenseDetails> expenseList = new List<ExpenseDetails>();

            foreach (var expense in nonGroupExpense)
            {
                if (!expense.FromUser.Equals(expense.Expenses.Payee))
                {
                    expenseList.Add(new ExpenseDetails
                    {
                        ID = expense.ExpenseID,
                        ExpenseName = expense.Expenses.Name,
                        Date = expense.Expenses.Date,
                        Amount = expense.Amount,
                        TotalAmount = expense.Expenses.TotalAmount,
                        PayerID = expense.FromUser,
                        Payer = _userManager.FindByIdAsync(expense.FromUser).Result.FullName,
                        PayeeID = expense.Expenses.Payee,
                        Payee = _userManager.FindByIdAsync(expense.Expenses.Payee).Result.FullName
                    });
                }
            }
            return expenseList;
        }

        public async Task SettlementAsync(SettlementAC settlement)
        {
            List<Activity> activities = new List<Activity>();
            UserExpenseMapper expense = new UserExpenseMapper();
            string groupName = "";

            if (settlement.GroupID != 0)
            {
                groupName = await _context.Groups.Where(g => g.ID == settlement.GroupID).Select(g => g.Name).FirstOrDefaultAsync();
                expense = await _context.UserExpenseMappers.Where(u => u.Expenses.GroupID == settlement.GroupID).Where(u => u.FromUser.Equals(settlement.Payer) && u.Expenses.Payee.Equals(settlement.Payee)).Include(u => u.Expenses).FirstOrDefaultAsync();
            }
            else
            {
                expense = await _context.UserExpenseMappers.Where(u => u.Expenses.GroupID == null).Where(u => u.FromUser.Equals(settlement.Payer) && u.Expenses.Payee.Equals(settlement.Payee)).Include(u => u.Expenses).FirstOrDefaultAsync();
            }

            if (expense.Amount >= settlement.Amount)
            {
                expense.Amount -= settlement.Amount;
            }

            if(settlement.GroupID != 0)
            {
                activities.Add(new Activity
                {
                    UserID = settlement.Payer,
                    Date = settlement.SettlementDate,
                    Description = $"You paid {settlement.Amount} to {_userManager.FindByIdAsync(settlement.Payee).Result.FullName} in {groupName}"
                });

                activities.Add(new Activity
                {
                    UserID = settlement.Payee,
                    Date = settlement.SettlementDate,
                    Description = $"{_userManager.FindByIdAsync(settlement.Payer).Result.FullName} paid {settlement.Amount} to you in {groupName}"
                });
            }
            else
            {
                activities.Add(new Activity
                {
                    UserID = settlement.Payer,
                    Date = settlement.SettlementDate,
                    Description = $"You paid {settlement.Amount} to {_userManager.FindByIdAsync(settlement.Payee).Result.FullName}"
                });

                activities.Add(new Activity
                {
                    UserID = settlement.Payee,
                    Date = settlement.SettlementDate,
                    Description = $"{_userManager.FindByIdAsync(settlement.Payer).Result.FullName} paid {settlement.Amount} to you"
                });
            }

            await _context.Activities.AddRangeAsync(activities);
            _context.UserExpenseMappers.Update(expense);
            await SaveAsync();
        }

        public async Task SaveAsync()
        {
            await _context.SaveChangesAsync();
        }

        public void Dispose()
        {
            throw new NotImplementedException();
        }

        #endregion
    }
}
