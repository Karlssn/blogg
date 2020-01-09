import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NONE_TYPE } from '@angular/compiler/src/output/output_ast';
import {DataService} from '../data.service';
@Component({
  selector: 'app-blogg',
  templateUrl: './blogg.component.html',
  styleUrls: ['./blogg.component.scss'],
  encapsulation: ViewEncapsulation.None
***REMOVED***
export class BloggComponent implements OnInit {
  
  loadedposts =[]; 
  
  allMd = [{file:'Welcome.md'},{file:'Welcome.md'}]

  markdown: Array<any>;

  constructor(private _dataService: DataService) { 
    this._dataService.getMarkdown()
    .subscribe(res => this.markdown = res);
  }

  ngOnInit() {
  }

}
