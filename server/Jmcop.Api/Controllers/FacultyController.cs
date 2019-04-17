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
    public class FacultyController : Controller
    {
        private IGenericRepository<Faculty> _faculty;

        public FacultyController(IGenericRepository<Faculty> genericRepository)
        {
            _faculty = genericRepository;
        }
        [HttpGet]
        [Route("getall")]
        public IActionResult GetAll()
        {
            var lst = _faculty.List().ToList();
            if (lst != null)
            {
                var res = new ApiResponse()
                {
                    status = StatusCodes.Status200OK.ToString(),
                    errorCode = StatusCodes.Status200OK,
                    result = lst
                };
                return Ok(res);
            }
            else
            {
                return BadRequest();
            }

        }

        [HttpPost]
        [Route("add")]
        public IActionResult Save([FromBody]Faculty faculty)
        {
            try
            {
                _faculty.Add(faculty);

                var res = new ApiResponse()
                {
                    status = StatusCodes.Status200OK.ToString(),
                    errorCode = StatusCodes.Status200OK,
                    result = null
                };
                return Ok(res);
            }
            catch (Exception)
            {
                return Forbid();
            }
          

        }

    }
}
