using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Entities.Models;
using Microsoft.AspNetCore.Mvc;

namespace AccountOwnerServer.Controllers
{
    [Route("api/auth")]
    public class AuthController : Controller
    {
        // GET api/login
        [HttpPost, Route("login")]
        public IActionResult Login([FromBody]Login user)
        {
            return View();
        }
    }
}