using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Jmcop.IGenericRepository;
using Jmcop.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Jmcop.Api.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class UsersController : Controller
    {
        private IGenericRepository<User> _genericRepository;

        public UsersController(IGenericRepository<User> genericRepository)
        {
            _genericRepository = genericRepository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok("Running");
        }


        [HttpPost]
        public IActionResult Get([FromBody]User user)
        {
            var dom=_genericRepository.Get(x=>x.Email==user.Email && x.Password==user.Password).FirstOrDefault();
            if(dom!=null){
                var res = new ApiResponse()
                {
                    status = StatusCodes.Status200OK.ToString(),
                    errorCode = StatusCodes.Status200OK,
                    result = dom
                };
                    return Ok(res);
            }else{
                return BadRequest();
            }

            }
           
          
        
        
    }
}
