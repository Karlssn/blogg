import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NONE_TYPE } from '@angular/compiler/src/output/output_ast';
import {DataService} from '../data.service';
import { Markdown } from '../markdown';
@Component({
  selector: 'app-blogg',
  templateUrl: './blogg.component.html',
  styleUrls: ['./blogg.component.scss'],
  encapsulation: ViewEncapsulation.None
***REMOVED***
export class BloggComponent implements OnInit {
  
  
  //allMd = [{file:'Welcome.md'},{file:'Welcome.md'}];
  markdown: string[] = [];

  constructor(private _dataService: DataService) { 
    let markdownloc = '../../assets/Markdown/';
    let _this = this;
    this._dataService.getMarkdown()
    .subscribe(res => {
      res.map(function(x,index){
        let temp = markdownloc + Object.values(x.RowKey)[1];
        _this.markdown.push(temp);
  ***REMOVED***
***REMOVED***
    );
  }

  ngOnInit() {
  }

}
