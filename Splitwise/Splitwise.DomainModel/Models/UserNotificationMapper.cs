using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Splitwise.DomainModel.Models
{
    public class UserNotificationMapper
    {

        #region Properties

        [Key]
        public int ID { get; set; }
        public string UserID { get; set; }
        public int? NotificationID { get; set; }
        public Boolean IsEnabled { get; set; }


        [ForeignKey("UserID")]
        public virtual ApplicationUser Users { get; set; }

        [ForeignKey("NotificationID")]
        public virtual Notification Notifications { get; set; }

        #endregion
    }
}
