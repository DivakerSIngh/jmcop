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

        [HttpPost, DisableRequestSizeLimit]
        [Route("banner")]
        public IActionResult Banner()
        {
            var banner = new Banner();
            try
            {
                var file = Request.Form.Files[0];
                var fileResult = new BaseClass().Upload(file, "banner", 1300, 200);

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
                var fileResult = new BaseClass().Upload(file, "banner", 500, 200);

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
        [Route("library")]
        public IActionResult Library()
        {
            var banner = new Banner();
            try
            {
                var file = Request.Form.Files[0];
                var fileResult = new BaseClass().Upload(file, "library", 500, 200);

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
                var fileResult = new BaseClass().Upload(file, "library", 500, 200);

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
        [Route("gallery")]
        public IActionResult Gallery()
        {
            var banner = new Banner();
            try
            {
                var file = Request.Form.Files[0];
                var fileResult = new BaseClass().Upload(file, "library", 800, 300);

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
