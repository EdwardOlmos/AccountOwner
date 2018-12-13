using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Contracts;
using Entities.Models;
using Entities.Extensions;
using Microsoft.AspNetCore.Authorization;


namespace AccountOwnerServer.Controllers
{
    [Route("api/account")]
    public class AccountController : Controller
    {
        private ILoggerManager _logger;
        private IRepositoryWrapper _repository;

        public AccountController(ILoggerManager logger, IRepositoryWrapper repository)
        {
            _logger = logger;
            _repository = repository;
        }

        // GET: api/account
        [HttpGet]
        public IActionResult GetAllAccounts()
        {
            try
            {
                var accounts = _repository.Account.GetAllAccounts();
                _logger.LogInfo($"Returned all accounts from database.");
                return Ok(accounts);
            }
            catch (Exception ex)
            {
                _logger.LogError($"Something went wrong inside GetAllAccounts action: {ex.Message}");
                return StatusCode(500, "Internal server error");
            }
        }

        //// GET: api/account
        //[HttpGet, Authorize]
        //public IEnumerable<string> Get()
        //{
        //    return new string[] { "John  Doe", "Jane Doe" };
        //}

        //// POST api/owner
        //[HttpPost]
        //public IActionResult CreateAccount([FromBody]Account account)
        //{
        //    try
        //    {
        //        if (account.IsObjectNull())
        //        {
        //            _logger.LogError("Account object sent from client is null.");
        //            return BadRequest("Account object is null");
        //        }
        //        if (!ModelState.IsValid)
        //        {
        //            _logger.LogError("Invalid account object sent from client.");
        //            return BadRequest("Invalid model object");
        //        }

        //        _repository.Account.CreateAccount(account);
        //        return CreatedAtRoute("AccountById", new { id = account.Id }, account);
        //    }
        //    catch (Exception ex)
        //    {
        //        _logger.LogError($"Something went wrong inside CreateAccount action: {ex.Message}");
        //        return StatusCode(500, "Internal server error");
        //    }
        //}



    }
}