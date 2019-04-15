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
    public class BannerController : Controller
    {
        private IGenericRepository<Banner> _banner;

        public BannerController(IGenericRepository<Banner> genericRepository)
        {
            _banner = genericRepository;
        }
        [HttpGet]
        [Route("bannerimage")]
        public IActionResult GetHomeBanner()
        {
            var lst = _banner.Get(x => x.Type== (int)BanneType.homeBanner).ToList();
            if (lst!=null)
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
        [HttpGet]
        [Route("courseimage")]
        public IActionResult GetCourseBanner()
        {
            var lst = _banner.Get(x => x.Type == (int)BanneType.course).ToList();
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
        [HttpGet]
        [Route("libraryimage")]
        public IActionResult GetLibraryBanner()
        {
            var lst = _banner.Get(x => x.Type == (int)BanneType.library).ToList();
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
        [HttpGet]
        [Route("eventsimage")]
        public IActionResult GetEventBanner()
        {
            var lst = _banner.Get(x => x.Type == (int)BanneType.events).ToList();
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
        [HttpGet]
        [Route("gallery")]
        public IActionResult Gallery()
        {
            var lst = _banner.Get(x => x.Type == (int)BanneType.gallery).ToList();
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
    }
}