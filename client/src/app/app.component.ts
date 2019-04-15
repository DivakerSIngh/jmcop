import { Component,OnInit } from '@angular/core';
import { LoaderService } from './service/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'app';
  /**
   *
   */ showLoader :boolean= false;
  constructor(private loaderService:LoaderService) {
    
    
  }
  ngOnInit(){
    setTimeout(() => {
      this.showLoader = false;
    this
    .loaderService
    .status
    .subscribe((val : boolean) => {
      this.showLoader = val;
    });
    }, 500);
    
  }
}
