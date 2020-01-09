import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
***REMOVED***
export class DataService {

  constructor(private _http: HttpClient) {}
   getMarkdown(){
     return this._http.get("/api/amount").
     map(result => this.result = result.json().data);
   }
}
