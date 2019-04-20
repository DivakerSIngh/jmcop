import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/service/api.service';
import * as constants from '../../../../service/apiConfig';

@Component({
  selector: 'app-b-pharma',
  templateUrl: './b-pharma.component.html',
  styleUrls: ['./b-pharma.component.scss']
})
export class BPharmaComponent implements OnInit {

  courseList:any=[];
  constructor(private _apiService:ApiService) {
    
   }

  ngOnInit() {
    this.getCourse();
  }
  getCourse(){
    this._apiService.httpGet(constants.getAllCourse+"pageNumber=0&pageSize=100").subscribe((response) => {
      if (response.status == 200) {
        this.courseList=response.result;
      }
    })
  }
}
