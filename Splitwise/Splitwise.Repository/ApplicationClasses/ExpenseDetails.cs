using System;
using System.Collections.Generic;
using System.Text;

namespace Splitwise.Repository.ApplicationClasses
{
    public class ExpenseDetails
    {
        public int? ID { get; set; }
        public string ExpenseName { get; set; }
        public DateTime Date { get; set; }
        public string  PayerID { get; set; }
        public string Payer { get; set; }
        public string PayeeID { get; set; }
        public string Payee { get; set; }
        public float? Amount { get; set; }
        public float TotalAmount { get; set; }
    }
}
