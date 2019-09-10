using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Splitwise.DomainModel.Models
{
    public class Notification
    {

        #region Properties

        [Key]
        public int ID { get; set; }
        public string Description { get; set; }

        #endregion
    }
}
