import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot,ActivatedRoute, RouterStateSnapshot, Router} from '@angular/router';
import {ApiService} from './api.service';
import {map} from 'rxjs/operator/map';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class LoginAuthGuard implements CanActivate {

  constructor(private auth : ApiService, public router : Router) {}

  canActivate(route : ActivatedRouteSnapshot, state : RouterStateSnapshot) : Observable < boolean >| Promise < boolean >| boolean {
var data=localStorage.getItem('userDetails');
debugger
    if(data!=undefined && data!=''){
      return true;

    }else{
      return true;
    }
  }

}
