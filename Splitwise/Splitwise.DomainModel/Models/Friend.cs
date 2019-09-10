using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Splitwise.DomainModel.Models
{
    public class Friend
    {

        #region Properties

        [Key]
        public int ID { get; set; }
        public string UserID { get; set; }
        public string FriendID { get; set; }
        public int? GroupID { get; set; }


        [ForeignKey("UserID")]
        public virtual ApplicationUser Users { get; set; }

        [ForeignKey("FriendID")]
        public virtual ApplicationUser Friends { get; set; }


        [ForeignKey("GroupID")]
        public virtual Group Groups { get; set; }

        #endregion
    }
}
