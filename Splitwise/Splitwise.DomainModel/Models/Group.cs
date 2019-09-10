using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Splitwise.DomainModel.Models
{
    public class Group
    {

        #region Properties

        [Key]
        public int ID { get; set; }
        [Required]
        public string Name { get; set; }
        public string CreatedBy { get; set; }
        public DateTime DateCreated { get; set; }
        public Boolean SimplifyDebts { get; set; }
        public string InviteLink { get; set; }
        public int? Category { get; set; }
        public string Note { get; set; }
        public Boolean IsDeleted { get; set; }


        [ForeignKey("CreatedBy")]
        public virtual ApplicationUser Users { get; set; }

        [ForeignKey("Category")]
        public virtual Category Categories { get; set; }

        public virtual ICollection<UserGroupMapper> UserGroupMappers { get; set; }

        #endregion
    }
}
