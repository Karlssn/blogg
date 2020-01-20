import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NONE_TYPE } from '@angular/compiler/src/output/output_ast';
import { DataService } from '../data.service';
import { Comment } from '../comment';
import { combineLatest } from 'rxjs';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-blogg',
  templateUrl: './blogg.component.html',
  styleUrls: ['./blogg.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BloggComponent implements OnInit {

  markdown: String[] = [];
  comments: any[] = [];
  markdownloc = '../../assets/Markdown/';
  constructor(private _dataService: DataService) {
    let _this = this;
    this._dataService.getMarkdown()
      .subscribe(res => {
        _this.markdown = res.map((x) => {
          return this.markdownloc+x
        });
      });

    this._dataService.getComment()
      .subscribe(res => {
        res.map((x, index) => {
          _this.comments.push(x);
        });
      }, error => { }, () => {
        this.comments.sort((a, b) => {
          if (a.Timestamp._ > b.Timestamp._) {
            return 1;
          } if (a.Timestamp._ < b.Timestamp._) {
            return -1;
          }
          return 0;
        });
      });
  }

  addComment(f: NgForm, file) {
    let filename = file.replace(this.markdownloc, '');
    let time = new Date();
    let comment = new Comment(filename, f.value.text, f.value.name, time);
    this._dataService.postComment(comment).subscribe(com =>
      this.comments.push(com));
      window.location.reload();
  }

  ngOnInit() {
  }

}
