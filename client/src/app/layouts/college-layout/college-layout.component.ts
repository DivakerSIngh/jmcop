import { Component, OnInit,HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'app-college-layout',
  templateUrl: './college-layout.component.html',
  styleUrls: ['./college-layout.component.scss']
})
export class CollegeLayoutComponent implements OnInit {

  navMenuShow:boolean=true;
  constructor() { }

  //  @HostBinding('class.parent-menu') isOpen = false;
  // @HostListener('mouseover')
  // toggleOpen($event){
  //   debugger
  // this.isOpen = !this.isOpen;
  // }


  
 
  // @HostListener('click')
  // hidemenu($event){
  //   debugger
  // this.isOpen = !this.isOpen;
  // }

  slideToggle(){

    this.navMenuShow=  !this.navMenuShow;
  }

  isMobileMenu() {
    // if ($(window).width() > 991) {
    //   this.navMenuShow= false;
    // }
    this.navMenuShow= true;
};
  ngOnInit() {
  }

}
