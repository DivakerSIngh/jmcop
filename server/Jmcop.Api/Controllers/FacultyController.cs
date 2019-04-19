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
        public IActionResult GetAll([System.Web.Http.FromUri] PagingModel pagingModel)
        {
            var lst = _faculty.List();

            #region Paging
            int count = lst.Count();
            int CurrentPage = pagingModel.pageNumber+1;
            int PageSize = pagingModel.pageSize;
            int TotalCount = count;
            int TotalPages = (int)Math.Ceiling(count / (double)PageSize);

            // Returns List of Customer after applying Paging   
            var items = lst.Skip((CurrentPage - 1) * PageSize).Take(PageSize).ToList();

            // if CurrentPage is greater than 1 means it has previousPage  
            var previousPage = CurrentPage > 1 ? "Yes" : "No";

            // if TotalPages is greater than CurrentPage means it has nextPage  
            var nextPage = CurrentPage < TotalPages ? "Yes" : "No";

            var paginationMetadata = new
            {
                totalCount = TotalCount,
                pageSize = PageSize,
                currentPage = CurrentPage,
                totalPages = TotalPages,
                previousPage,
                nextPage
            };
            #endregion


            if (items != null)
            {
                var res = new ApiResponse()
                {
                    status = StatusCodes.Status200OK.ToString(),
                    errorCode = StatusCodes.Status200OK,
                    result = items,
                    pages= count
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

        [HttpPost]
        [Route("update")]
        public IActionResult Update([FromBody]Faculty facility)
        {
            try
            {
                _faculty.Update(facility);

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

        [HttpPost]
        [Route("delete")]
        public IActionResult Delete([FromBody]Faculty facility)
        {
            try
            {
                _faculty.Delete(facility);
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
