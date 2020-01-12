import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BloggComponent } from './blogg/blogg.component';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {DataService} from './data.service';


@NgModule({
  declarations: [
    AppComponent,
    BloggComponent
  ],
  imports: [
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient ***REMOVED***,
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
***REMOVED***
export class AppModule { }
