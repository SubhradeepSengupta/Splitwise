using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Splitwise.DomainModel.Models
{
    public class ApplicationUser : IdentityUser
    {

        #region Properties

        public string FullName { get; set; }
        public int? CurrencyID { get; set; }
        public int? LanguageID { get; set; }

        [ForeignKey("CurrencyID")]
        public virtual Currency Currencies { get; set; }

        [ForeignKey("LanguageID")]
        public virtual Language Languages { get; set; }

        public virtual ICollection<UserGroupMapper> UserGroupMappers { get; set; }

        #endregion
    }
}
