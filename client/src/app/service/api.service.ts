
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEventType, HttpResponse,HttpHeaders } from '@angular/common/http'
import { environment } from "../../environments/environment";
import { Observable, throwError } from "rxjs";
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
import { LoaderService } from './loader.service';
import { MatSnackBar } from '@angular/material';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
//apiBaseUrl:string="http://api.jmcop.org:80/api/";
apiBaseUrl:string='http://localhost:50611/api/';
token:any;
  constructor(private httpClient: HttpClient,private loader:LoaderService,private snackBar:MatSnackBar) {
  }

  //set header
  getHeader() {
    const header = {
      'Content-Type':  'application/json',
      'Access-Control-Allow-Origin':'*',
        'Authorization': 'Basic YWRtaW5AYnJvd3NlcmFwcC5jb206UGFzc0B3b3JkMQ==',
       
      };
      const httpOptions = new HttpHeaders(header);

    return httpOptions;
  }

  //call webapi using httpget
  httpPostLogin(url, obj) {
    debugger
    this.loader.display(true);
    const headeroption = {
      headers:new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin':'*',
        'Authorization': 'Basic YWRtaW5AYnJvd3NlcmFwcC5jb206UGFzc0B3b3JkMQ=='
      })             
      };
     
    return this.httpClient.post(this.apiBaseUrl + url, obj, headeroption)
    .pipe(
      map((resp: any) => {
        
        console.log("response", resp);
        this.loader.display(false);
        return resp;
  
      }), catchError( error => {
        
        this.loader.display(false);
        this.openSnackBar(error.message);
        console.log("createOrder error",error );
      return throwError("createOrder: " + error)
  
      }));
  }





upload(formData:any,url) {
  this.loader.display(true);
  const uploadReq = new HttpRequest('POST', this.apiBaseUrl + url, formData, {
    reportProgress: false,
  });

  return this.httpClient.request(uploadReq).pipe(
    map((resp: any) => {
      
      console.log("response", resp);
     
      return resp;

    }), catchError( error => {
      this.loader.display(true);
      this.openSnackBar(error.message);
      console.log("createOrder error",error );
    return throwError("createOrder: " + error)

    }));
  
  
  
  
  // .subscribe(event => {
  //  debugger
  // });
}



postFile(url,file:any) {
  this.loader.display(true);
  const header = {
  
    'Content-Type':'application/x-www-form-urlencoded',
    'Access-Control-Allow-Origin':'*',
    'Authorization': 'Basic YWRtaW5AYnJvd3NlcmFwcC5jb206UGFzc0B3b3JkMQ=='
    };
    var httpOptions = new HttpHeaders(header);
  return this.httpClient.post(this.apiBaseUrl + url, file, {headers : httpOptions})
  .pipe(
    map((resp: any) => {
      
      console.log("response", resp);
      this.loader.display(false);
      return resp;

    }), catchError( error => {
      
      this.loader.display(false);
      this.openSnackBar(error.message);
      console.log("createOrder error",error );
    return throwError("createOrder: " + error)

    }));
}


  //call webapi using httpget
  httpPost(url, obj) {
    this.loader.display(true);
    const header = {
      'Content-Type':  'application/json',
      'Access-Control-Allow-Origin':'*',
        'Authorization': 'Basic YWRtaW5AYnJvd3NlcmFwcC5jb206UGFzc0B3b3JkMQ==',
      };
      var httpOptions = new HttpHeaders(header);
    return this.httpClient.post(this.apiBaseUrl + url, obj, {headers : httpOptions})
    .pipe(
      map((resp: any) => {
        
        console.log("response", resp);
        this.loader.display(false);
        return resp;
  
      }), catchError( error => {
        
        this.loader.display(false);
        this.openSnackBar(error.message);
        console.log("createOrder error",error );
      return throwError("createOrder: " + error)
  
      }));
  }
  openSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 1500
    });
  }
  //call webapi using httpget
  httpGet(url) {
    this.loader.display(true);
    const header = {
      'Content-Type':  'application/json',
      'Access-Control-Allow-Origin':'*',
        'Authorization': 'Basic YWRtaW5AYnJvd3NlcmFwcC5jb206UGFzc0B3b3JkMQ==',
          
      };
      var httpOptions = new HttpHeaders(header);
    return this.httpClient.get(this.apiBaseUrl + url, {headers : httpOptions})
    .pipe(
      map((resp: any) => {
        this.loader.display(false);
        console.log("response", resp);
        return resp;
      }), catchError( error => {
        this.loader.display(false);
        this.openSnackBar(error.message);
        console.log("createOrder error",error );
      return throwError("createOrder: " + error)
      }));
  }


}

