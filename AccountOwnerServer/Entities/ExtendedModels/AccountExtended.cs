using Entities.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Entities.ExtendedModels
{
    public class AccountExtended: IEntity
    {
        public Guid Id { get; set; }
        public DateTime DateCreated { get; set; }
        public string AccountType { get; set; }
        public IEnumerable<Owner> Owner { get; set; }

        public AccountExtended()
        {

        }

        public AccountExtended(Account account)
        {
            Id = account.Id;
            DateCreated = account.DateCreated;
            AccountType = account.AccountType;
        }
    }
}
