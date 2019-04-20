using Jmcop.Models;
using Microsoft.AspNetCore.Mvc;
using CloudinaryDotNet;
using CloudinaryDotNet.Actions;
using System.Net;
using System.Net.Http;
using Microsoft.AspNetCore.Http;
using System.IO;
using System.Collections.Generic;

namespace Jmcop.Api.Controllers
{
   public class BaseClass
    {
        public ImageUploadResult UploadAsync(IFormFile file,string directory,int height=1300,int width=200)
        {
            System.IO.Stream stream = file.OpenReadStream();
            var cloudinary = new Cloudinary(
               new Account(
                 "divaker",
                 "681854243627474",
                 "Pu8rfhmccAL2cy2ip-ZZHf1gpvE"));

            var uploadParams = new ImageUploadParams()
            {
                File = new FileDescription("jmcop", stream),
                PublicId = "sample_id",
                Transformation = new Transformation().Width(width).Height(height),// Crop("limit").Width(width).Height(height),
                EagerTransforms = new List<Transformation>()
                      {
                        new Transformation().Width(width).Height(height).Crop("thumb").Gravity("face").
                          Radius(20).Effect("sepia"),
                        new Transformation().Width(width).Height(height).Crop("fit").FetchFormat("png")
                      },
                Tags = "special, for_homepage"
            };

            return  cloudinary.UploadLarge(uploadParams);
           // uploadResult.JsonObj.Last
           // return uploadResult;
        }
    }
}