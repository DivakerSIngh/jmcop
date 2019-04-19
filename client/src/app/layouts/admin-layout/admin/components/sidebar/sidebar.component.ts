import { Component, OnInit } from '@angular/core';

declare const $: any;
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
    
    // { path: '/admin/dashboard1', title: 'Dashboard',  icon: 'dashboard', class: '' },
    // { path: '/admin/user-profile', title: 'Profile',  icon:'person', class: '' },
    // { path: '/admin/table-list', title: 'Table List',  icon:'content_paste', class: '' },
    // { path: '/admin/typography', title: 'Typography',  icon:'library_books', class: '' },
    // { path: '/admin/icons', title: 'Icons',  icon:'bubble_chart', class: '' },
    { path: '/admin/maps', title: 'Maps',  icon:'location_on', class: '' },
    // { path: '/admin/notifications', title: 'Notifications',  icon:'notifications', class: '' },
   
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  userdetails:any;
  constructor() { 

  this.userdetails= JSON.parse(localStorage.getItem('userdetails'))

   
  }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
