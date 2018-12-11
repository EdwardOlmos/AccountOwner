using System;
using System.Collections.Generic;
using System.Text;
using Contracts;
using Entities;
using Entities.Models;
using Entities.Extensions;
using Entities.ExtendedModels;
using System.Linq;

namespace Repository
{
    public class AccountRepository: RepositoryBase<Account>, IAccountRepository
    {
        public AccountRepository(RepositoryContext repositoryContext) :base(repositoryContext)
        {

        }

        public IEnumerable<Account> AccountsByOwner(Guid ownerId)
        {
            return FindByCondition(a => a.OwnerId.Equals(ownerId));
        }

        public IEnumerable<Account> GetAllAccounts()
        {
            return FindAll().OrderBy(ow => ow.DateCreated);
        }

        public Account GetAccountById(Guid accountId)
        {
            return FindByCondition(account => account.Id.Equals(accountId)).DefaultIfEmpty(new Account()).FirstOrDefault();
        }


        public void CreateAccount(Account account)
        {
            account.Id = Guid.NewGuid();
            Create(account);
            Save();
        }

        public void UpdateAccount(Account dbAccount, Account account)
        {
            throw new NotImplementedException();
        }

        public void DeleteAccount(Account account)
        {
            throw new NotImplementedException();
        }
    }
}
