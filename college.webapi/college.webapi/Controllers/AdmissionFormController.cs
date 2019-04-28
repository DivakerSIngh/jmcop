
using AutoMapper;
using college.@interface;
using college.models;
using college.webapi.Models;
using System;
using System.Linq;
using System.Net;
using System.Web.Http;

namespace college.webapi.Controllers
{
    [RoutePrefix("api/admission")]
    public class AdmissionFormController : ApiController
    {
        private readonly IGeneric<StudentAdmissionForm> _admissionForm;
        private readonly IGeneric<StudentQualificationMapping>  _studentMapping;

        public AdmissionFormController(IGeneric<StudentAdmissionForm> genericRepositoryForm, IGeneric<StudentQualificationMapping> genericRepositoryMapping)
        {
            _admissionForm = genericRepositoryForm;
            _studentMapping = genericRepositoryMapping;
        }
        [HttpPost]
        [Route("postform")]
        public IHttpActionResult Form([FromBody] AdmissionForm admissionForm)
        {
            var res = new ApiResponse();
            try
            {
                var student = new StudentAdmissionForm()
                {
                    Address = admissionForm.formAdmission.Address,
                    CandidateName = admissionForm.formAdmission.CandidateName,
                    City = admissionForm.formAdmission.City,
                    Email = admissionForm.formAdmission.Email,
                    FatherName = admissionForm.formAdmission.FatherName,
                    Mobile = admissionForm.formAdmission.Mobile,
                    MotherName = admissionForm.formAdmission.MotherName,
                    State = admissionForm.formAdmission.State,
                };
               var response=_admissionForm.Add(student);


                var lstmap = admissionForm.lstQualification.ConvertAll(x => new StudentQualificationMapping
                {
                    Boards = x.Boards,
                    Class = x.Class,
                    StudentAdmissionID = response.Id,
                    Subjects = x.Subjects,
                    YearOfPassing = x.YearOfPassing,
                }).ToList();
              var returrep=  _studentMapping.BulkAdd(lstmap);
               
                 res = new ApiResponse()
                {
                    status = HttpStatusCode.OK.ToString(),
                    code = (int)HttpStatusCode.OK,
                    result = lstmap
                 };
            }
            catch (Exception ex)
            {

                throw;
            }
           
          
            return Ok(res);

        }
    }
}
