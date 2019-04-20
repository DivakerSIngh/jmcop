using Jmcop.Models;
using Microsoft.AspNetCore.Mvc;
using CloudinaryDotNet;
using CloudinaryDotNet.Actions;
using System.Net;
using System.Net.Http;
using Microsoft.AspNetCore.Http;
using System.IO;
using Jmcop.IGenericRepository;


namespace Jmcop.Api.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class FileUploadController : Controller
    {

        private IGenericRepository<Banner> _banner;


        public FileUploadController(IGenericRepository<Banner> genericRepository)
        {
            _banner = genericRepository;
        }

        [HttpPost]
        [RequestSizeLimit(2147483648)]
        [Route("banner")]
        public IActionResult Banner()
        {
            var banner = new Banner();
            try
            {
                var file = Request.Form.Files[0];
                var fileResult = new BaseClass().UploadAsync(file, "banner", 300, 900);

                 banner = new Banner()
                {
                    ImgUrl = fileResult.Uri.OriginalString,
                    Status = true,
                    Type = (int)BanneType.homeBanner
                 };
                _banner.Add(banner);
            }
            catch (System.Exception ex)
            {
                return Forbid();
            }
           
            return Ok(banner);
        }
        [HttpPost]
        [Route("course")]
        public IActionResult Course()
        {
            var banner = new Banner();
            try
            {
                var file = Request.Form.Files[0];
                var fileResult = new BaseClass().UploadAsync(file, "banner", 500, 200);

                banner = new Banner()
                {
                    ImgUrl = fileResult.Uri.OriginalString,
                    Status = true,
                    Type = (int)BanneType.course
                };
                _banner.Add(banner);
            }
            catch (System.Exception ex)
            {
                return Forbid();
            }

            return Ok(banner);

        }

        [HttpPost]
        [Route("faculty")]
        public IActionResult Faculty()
        {
            var banner = new Banner();
            try
            {
                var file = Request.Form.Files[0];
                var fileResult = new BaseClass().UploadAsync(file, "faculty", 300, 100);
                var res = new ApiResponse()
                {
                    status = StatusCodes.Status200OK.ToString(),
                    errorCode = StatusCodes.Status200OK,
                    result = fileResult.Uri.OriginalString
                };
                return Ok(res);
            }
            catch (System.Exception ex)
            {
                return Forbid();
            }
        }

        [HttpPost]
        [Route("library")]
        public IActionResult Library()
        {
            var banner = new Banner();
            try
            {
                var file = Request.Form.Files[0];
                var fileResult = new BaseClass().UploadAsync(file, "library", 500, 200);

                banner = new Banner()
                {
                    ImgUrl = fileResult.Uri.OriginalString,
                    Status = true,
                    Type = (int)BanneType.library
                };
                _banner.Add(banner);
            }
            catch (System.Exception ex)
            {
                return Forbid();
            }

            return Ok(banner);

        }

        [HttpPost]
        [Route("events")]
        public IActionResult Events()
        {
            var banner = new Banner();
            try
            {
                var file = Request.Form.Files[0];
                var fileResult = new BaseClass().UploadAsync(file, "library", 500, 200);

                banner = new Banner()
                {
                    ImgUrl = fileResult.Uri.OriginalString,
                    Status = true,
                    Type = (int)BanneType.events
                };
                _banner.Add(banner);
            }
            catch (System.Exception ex)
            {
                return Forbid();
            }

            return Ok(banner);

        }
        [HttpPost]
        [RequestSizeLimit(2147483648)]
        [Route("gallery")]
        public IActionResult Gallery()
        {
            var banner = new Banner();
            try
            {
                var file = Request.Form.Files[0];

               

                var fileResult = new BaseClass().UploadAsync(file, "gallery", 200, 300);

                banner = new Banner()
                {
                    ImgUrl = fileResult.Uri.OriginalString,
                    Status = true,
                    Type =(int) BanneType.gallery
                };
                _banner.Add(banner);
            }
            catch (System.Exception ex)
            {
                return Forbid();
            }

            return Ok(banner);

        }
    }

}
