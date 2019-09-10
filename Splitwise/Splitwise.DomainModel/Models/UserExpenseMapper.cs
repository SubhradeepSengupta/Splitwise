using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Splitwise.DomainModel.Models
{
    public class UserExpenseMapper
    {

        #region Properties

        [Key]
        public int ID { get; set; }
        public int? ExpenseID { get; set; }

        //public string ToUser { get; set; }

        public string FromUser { get; set; }
        public float? Amount { get; set; }
        public int? CurrencyID { get; set; }


        [ForeignKey("ExpenseID")]
        public virtual GroupExpenseMapper Expenses { get; set; }

        [ForeignKey("FromUser")]
        public virtual ApplicationUser Payer { get; set; }

        [ForeignKey("CurrencyID")]
        public virtual Currency Currencies { get; set; }

        #endregion
    }
}
