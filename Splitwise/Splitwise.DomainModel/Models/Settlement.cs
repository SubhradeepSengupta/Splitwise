using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Splitwise.DomainModel.Models
{
    public class Settlement
    {

        #region Properties

        [Key]
        public int ID { get; set; }
        public int? ExpenseID { get; set; }
        public string Payee { get; set; }
        public string Payer { get; set; }
        public float Amount { get; set; }
        public DateTime Date { get; set; }


        [ForeignKey("ExpenseID")]
        public virtual GroupExpenseMapper Expenses { get; set; }

        [ForeignKey("Payee")]
        public virtual ApplicationUser Payees { get; set; }

        [ForeignKey("Payer")]
        public virtual ApplicationUser Payers { get; set; }

        #endregion
    }
}
