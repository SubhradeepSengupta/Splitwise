using System;
using System.Collections.Generic;
using System.Text;

namespace Splitwise.Repository.ApplicationClasses
{
    public class UserGroupAC
    {
        public int? GroupID { get; set; }
        public string GroupName { get; set; }
        public string CreatedBy { get; set; }
        public string CreatedByID { get; set; }
        public DateTime DateCreated { get; set; }
        public int? Category { get; set; }
        public Boolean SimplifyDebts { get; set; }
        public string Note { get; set; }
        public List<UserAC> GroupUsers { get; set; }
    }
}
