using System;
using System.Collections.Generic;
using System.Text;

namespace Splitwise.Repository.ApplicationClasses
{
    public class CreateGroupAC
    {
        public string Name { get; set; }
        public int Category { get; set; }
        public string Note { get; set; }
        public Boolean SimplifyDebts { get; set; }
        public List<CreateUserAC> UserGroupMapper { get; set; }
    }
}
