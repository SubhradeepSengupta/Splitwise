using System;
using System.Collections.Generic;
using System.Text;

namespace Splitwise.Repository.ApplicationClasses
{
    public class CreateExpenseAC
    {
        public string Name { get; set; }
        public DateTime Date { get; set; }
        public string Payee { get; set; }
        public float Amount { get; set; }
        public List<IncludedUser> IncludedUsers { get; set; }
        public string SplitType { get; set; }
        public string Note { get; set; }
    }

    public class IncludedUser
    {
        public string UserID { get; set; }
        public string UserName { get; set; }
        public float? UserAmount { get; set; }
        public float? Percentage { get; set; }
    }
}
