using Splitwise.DomainModel.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Splitwise.Repository.ApplicationClasses
{
    public class ExpenseAC
    {
        public virtual List<UserExpenseMapper> UserExpenseMapper { get; set; }
        public virtual GroupExpenseMapper GroupExpenseMapper { get; set; }
    }
}
