
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

  constructor(private httpClient: HttpClient,private loader:LoaderService,private snackBar:MatSnackBar) {
  }

  //set header
  getHeader() {
    const header = {
      'Content-Type':  'application/json',
        'Authorization': 'Basic YWRtaW5AYnJvd3NlcmFwcC5jb206UGFzc0B3b3JkMQ==',
        'authtoken': localStorage.getItem('auth-token')
      };
      const httpOptions = new HttpHeaders(header);

    return httpOptions;
  }

  //call webapi using httpget
  httpPostLogin(url, obj) {
    debugger
    this.loader.display(true);
    const header = {
      'Content-Type':  'application/json',
        'Authorization': 'Basic YWRtaW5AYnJvd3NlcmFwcC5jb206UGFzc0B3b3JkMQ=='
        
      };
      var httpOptions = new HttpHeaders(header);
    return this.httpClient.post(environment.serverUrl + url, obj, {headers : httpOptions})
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
  // if (files.length === 0)
  //   return;

  // const formData = new FormData();

  // for (let file of files)
  //   formData.append(file.name, file);

  const uploadReq = new HttpRequest('POST', environment.serverUrl + url, formData, {
    reportProgress: true,
  });

  return this.httpClient.request(uploadReq).pipe(
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
  
  
  
  
  // .subscribe(event => {
  //  debugger
  // });
}



postFile(url,file:any) {
  this.loader.display(true);
  const header = {
   // 'Accept': 'application/json',
     //'Content-Type': "multipart/form-data",
    'Content-Type':'application/x-www-form-urlencoded',
    'Authorization': 'Basic YWRtaW5AYnJvd3NlcmFwcC5jb206UGFzc0B3b3JkMQ=='
      // 'authtoken': localStorage.getItem('token')
    };
    var httpOptions = new HttpHeaders(header);
  return this.httpClient.post(environment.serverUrl + url, file, {headers : httpOptions})
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
        'Authorization': 'Basic YWRtaW5AYnJvd3NlcmFwcC5jb206UGFzc0B3b3JkMQ==',
        'authtoken': localStorage.getItem('token')
      };
      var httpOptions = new HttpHeaders(header);
    return this.httpClient.post(environment.serverUrl + url, obj, {headers : httpOptions})
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
        'Authorization': 'Basic YWRtaW5AYnJvd3NlcmFwcC5jb206UGFzc0B3b3JkMQ==',
        'authtoken': localStorage.getItem('token')        
      };
      var httpOptions = new HttpHeaders(header);
    return this.httpClient.get(environment.serverUrl + url, {headers : httpOptions})
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

