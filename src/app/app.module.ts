import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BloggComponent } from './blogg/blogg.component';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {DataService} from './data.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    BloggComponent
  ],
  imports: [
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
