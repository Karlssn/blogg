import { Injectable } from '@angular/core';
import { Markdown } from './markdown';
import {HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
***REMOVED***
export class DataService {

  result:any;
  constructor(private _http: HttpClient) {}
  
   getMarkdown(): Observable<Markdown[]>{
     return this._http.get<Markdown[]>("/api/markdown");
   }
}
