using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Splitwise.DomainModel.Models
{
    public class GroupExpenseMapper
    {

        #region Properties

        [Key]
        public int ID { get; set; }
        public string Name { get; set; }
        public int? GroupID { get; set; }
        public String SplitType { get; set; }
        public string Payee { get; set; }
        public float TotalAmount { get; set; }
        public int? CurrencyID { get; set; }
        public DateTime Date { get; set; }
        public string Description { get; set; }
        public Boolean IsSettled { get; set; }
        public Boolean IsDeleted { get; set; }


        [ForeignKey("GroupID")]
        public virtual Group Groups { get; set; }

        [ForeignKey("Payee")]
        public virtual ApplicationUser Payees { get; set; }

        [ForeignKey("CurrencyID")]
        public virtual Currency Currencies { get; set; }

        #endregion
    }
}
