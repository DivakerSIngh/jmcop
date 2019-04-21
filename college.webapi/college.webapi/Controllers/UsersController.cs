using System.Linq;
using System.Net;
using System.Web.Http;
using college.@interface;
using college.models;
using Jmcop.Models;

namespace college.webapi.Controllers
{

    [RoutePrefix("api/user")]
    public class UsersController : ApiController
    {
        private readonly IGeneric<User> _genericRepository;
        public UsersController(IGeneric<User> genericRepository)
        {
            _genericRepository = genericRepository;
        }

        [HttpGet]
        [Route("get")]
        public IHttpActionResult Get()
        {
            return Ok("Running");
        }


        [HttpPost]
        public IHttpActionResult Get([FromBody]User user)
        {
            var dom = _genericRepository.Get(x => x.Email == user.Email && x.Password == user.Password).FirstOrDefault();
            if (dom != null)
            {
                var res = new ApiResponse()
                {
                    status = HttpStatusCode.OK.ToString(),
                    errorCode = (int)HttpStatusCode.OK,
                    result = dom
                };
                return Ok(res);
            }
            else
            {
                return BadRequest();
            }

        }




    }
}
