using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Splitwise.DomainModel.Models
{
    public class Currency
    {

        #region Properties

        [Key]
        public int ID { get; set; }
        public string Name { get; set; }

        #endregion
    }
}
