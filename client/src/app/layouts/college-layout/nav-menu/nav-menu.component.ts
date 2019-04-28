import { Component, OnInit } from '@angular/core';
declare const $: any;
@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {
  isMobile:boolean=false;
  menuList:RouteInfo[]=[];
  constructor() { }

  ngOnInit() {
  }
  slideToggle(){

  }
  isMobileMenu() {
    
    if (($(window).width() > 991)) {
        return false;
    }
    return true;
};
}

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/admin/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
  { path: '/admin/profile', title: 'Profile',  icon:'person', class: '' },
  { path: '/admin/faculty', title: 'Faculty',  icon:'library_books', class: '' },
  { path: '/admin/homemanagement', title: 'Home Managment',  icon:'notifications', class: '' },
  { path: '/admin/course', title: 'Course Managment',  icon:'content_paste', class: '' },    
  { path: '/admin/academics', title: 'Academics',  icon:'content_paste', class: '' },    
];
