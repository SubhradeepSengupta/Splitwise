using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Splitwise.DomainModel.Models
{
    public class UserGroupMapper
    {

        #region Properties

        [Key]
        public int ID { get; set; }
        public int? GroupID { get; set; }
        public string UserID { get; set; }

        [ForeignKey("GroupID")]
        public virtual Group Groups { get; set; }

        [ForeignKey("UserID")]
        public virtual ApplicationUser Users { get; set; }

        #endregion
    }
}
