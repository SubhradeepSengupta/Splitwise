using System;
using System.Collections.Generic;
using System.Text;

namespace Splitwise.Repository.ApplicationClasses
{
    public class IndividualExpenseAC
    {
        public int? ExpenseID { get; set; }
        public string ExpenseName { get; set; }
        public DateTime Date { get; set; }
        public float TotalAmount { get; set; }
        public string PayeeID { get; set; }
        public string SplitType { get; set; }
        public List<IncludedUser> Payer { get; set; }
        public string Note { get; set; }
    }
}
