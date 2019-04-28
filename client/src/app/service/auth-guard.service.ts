import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { map } from 'rxjs/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(public router:Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<boolean>|Promise<boolean>| boolean{
    var data=localStorage.getItem('userDetails');
debugger
    if(data!=undefined && data!=''){
      return true;

    }else{
      this.router.navigate(['/login']);
      return false;
    }
  }



}
