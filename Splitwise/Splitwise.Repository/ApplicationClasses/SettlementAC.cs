using System;
using System.Collections.Generic;
using System.Text;

namespace Splitwise.Repository.ApplicationClasses
{
    public class SettlementAC
    {
        public int GroupID { get; set; }
        public string Payee { get; set; }
        public string Payer { get; set; }
        public float Amount { get; set; }
        public DateTime SettlementDate { get; set; }
    }
}
