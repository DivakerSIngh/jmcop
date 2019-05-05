import { Component, OnInit, ElementRef } from '@angular/core';
import { LoaderService } from 'app/service/loader.service';
import { MatSnackBar } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'app/service/api.service';
import * as constants from '../../../../service/apiConfig';
import { FormGroup, FormControl, FormArray, Validators, FormBuilder } from '@angular/forms';
import * as jspdf from 'jspdf';  
  
import html2canvas from 'html2canvas';  

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {
  frm:any=FormGroup;
  stuName:string;
  stuId:number;
  registrationNo:string
  items: FormArray;
  qualification:any=[];

  constructor(private route:ActivatedRoute,private http:ApiService,  private router:Router,private formBuilder: FormBuilder) {
    

var stId=this.route.snapshot.paramMap.get("id");
    if(stId!=null && stId!="" &&  parseInt(stId)!= NaN){
      this.get(stId);
this.stuId=parseInt(stId);
      this.frm = new FormGroup({   
        candidatename: new FormControl('', [Validators.required]),
        fathername: new FormControl('', [Validators.required]),
        mothername: new FormControl('', [Validators.required]),
        mobile:  new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
        address:  new FormControl('', [Validators.required]),
        state: new FormControl('', [Validators.required]),
        city:  new FormControl('', [Validators.required])  ,
        coursetype:  new FormControl(1, [Validators.required])  ,
      })




    }else{
      this.router.navigate[("/admin/admisisonform")]
    }
    
   }
 

  get(id){

    var result = this.http.httpGet(constants.studentGetbyid+id);
    result.subscribe((response) => {
      var req=response.result;
      if (response.code ==200) {
        this.stuName=req.candidatename;
        this.frm.setValue({
          candidatename:req.candidatename,
          fathername: req.fathername,
          mothername: req.mothername,
          mobile:  req.mobile,
          email: req.email,
          address: req.address,
          state: req.state,
          city: req.city,
          coursetype: req.coursetype,
        });
        debugger
this.qualification= req.qualificationList;
this.registrationNo=req.registrationNumber;
      
      } else {
     
      }

    })
  }
  ngOnInit() {
  }

  print(){
    try {
      var data = document.getElementById('contentToConvert');  
    html2canvas(data).then(canvas => {  
      // Few necessary setting options  
      var imgWidth = 208;   
      var pageHeight = 295;    
      var imgHeight = canvas.height * imgWidth / canvas.width;  
      var heightLeft = imgHeight;  
      const contentDataURL = canvas.toDataURL('image/png')  
      let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF  
      var position = 0;  
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)  
      pdf.save(this.stuName+'.pdf'); // Generated PDF   
      this.submitStudentForm();
    }); 
    } catch (error) {
      
    }
     
  }
  submitStudentForm(){
    debugger
    var result = this.http.httpGet(constants.submitForm+this.stuId);
    result.subscribe((response) => {
     
      if (response.code ==200) {
      
      }
    })
    
  }
  

}
