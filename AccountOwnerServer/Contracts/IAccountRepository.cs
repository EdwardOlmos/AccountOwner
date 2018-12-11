using System;
using System.Collections.Generic;
using System.Text;
using Entities.Models;

namespace Contracts
{
    public interface IAccountRepository : IRepositoryBase<Account>
    {
        IEnumerable<Account> AccountsByOwner(Guid ownerId);
        IEnumerable<Account> GetAllAccounts();
        Account GetAccountById(Guid accountId);
        void CreateAccount(Account account);
        void UpdateAccount(Account dbAccount, Account account);
        void DeleteAccount(Account account);

    }
}
