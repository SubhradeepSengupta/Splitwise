using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Splitwise.DomainModel.Models
{
    public class Activity
    {
        #region Properties

        [Key]
        public int ID { get; set; }
        public int? GroupID { get; set; }
        public string UserID { get; set; }
        public DateTime Date { get; set; }
        public string Description { get; set; }


        [ForeignKey("GroupID")]
        public virtual Group Groups { get; set; }

        [ForeignKey("UserID")]
        public virtual ApplicationUser User { get; set; }

        #endregion
    }
}
