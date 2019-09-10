using Splitwise.DomainModel.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Splitwise.Repository
{
    public class UserAC
    {
        public string Id { get; set; }
        public string FullName { get; set; }
        public string UserName { get; set; }
        public int? DefaultLanguage { get; set; }
        public int? DefaultCurrency { get; set; }
    }
}
