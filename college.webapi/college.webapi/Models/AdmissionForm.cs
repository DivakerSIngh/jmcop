using college.models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace college.webapi.Models
{
    public class AdmissionForm
    {
        public AdmissionForm()
        {
            lstQualification = new List<AdmissionQualificationMapping>();
            formAdmission = new FormAdmission();
        }

        public FormAdmission formAdmission { get; set; }
        public List<AdmissionQualificationMapping> lstQualification{ get; set; }
    }
   public class FormAdmission
    {
        public int Id { get; set; }
        public string CandidateName { get; set; }
        public string FatherName { get; set; }
        public string MotherName { get; set; }
        public string Mobile { get; set; }
        public string Email { get; set; }
        public string Address { get; set; }
        public string State { get; set; }
        public string City { get; set; }
    }
    public class AdmissionQualificationMapping {

        public string Class { get; set; }
        public string YearOfPassing { get; set; }
        public string Subjects { get; set; }
        public string Boards { get; set; }
        public int StudentAdmissionID { get; set; }
    }
}