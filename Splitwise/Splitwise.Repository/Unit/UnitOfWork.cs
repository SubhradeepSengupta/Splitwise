using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Splitwise.DomainModel.Models;
using Splitwise.Repository.Expense;
using Splitwise.Repository.Group;
using Splitwise.Repository.User;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Splitwise.Repository.Unit
{
    public class UnitOfWork
    {

        #region Private Variables

        #region Dependencies

        private readonly ApplicationDbContext _context;
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly IHttpContextAccessor _accessor;


        #endregion

        private UserRepository user;
        private GroupRepository group;
        private ExpenseRepository expense;

        #endregion

        #region Properties

        public UserRepository User
        {
            get
            {
                if(user == null)
                {
                    user = new UserRepository(_context, _userManager);
                }
                return user;
            }
        }

        public GroupRepository Group
        {
            get
            {
                if(group == null)
                {
                    group = new GroupRepository(_context, _userManager);
                }
                return group;
            }
        }

        public ExpenseRepository Expense
        {
            get
            {
                if(expense == null)
                {
                    expense = new ExpenseRepository(_context, _userManager);
                }
                return expense;
            }
        }

        #endregion

        #region Constructors

        public UnitOfWork(ApplicationDbContext context, UserManager<ApplicationUser> userManager)
        {
            this._context = context;
            this._userManager = userManager;
        }

        #endregion

        #region Public Methods

        public async Task SaveAsync()
        {
            await _context.SaveChangesAsync();
        }

        #endregion
    }
}
