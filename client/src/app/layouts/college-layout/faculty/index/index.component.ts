import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/service/api.service';
import * as constants from '../../../../service/apiConfig';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  lst:any=[];
  constructor(private _apiService:ApiService) {
    
   }

  ngOnInit() {
    this.getCourse();
  }
  getCourse(){
    this._apiService.httpGet(constants.facultyList+"pageNumber=0&pageSize=100").subscribe((response) => {
      if (response.status == 200) {
        this.lst=response.result;
      }
    })
  }
}
