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
  progMarkdown: String[] = [];
  markdown: String[] = [];
  comments: any[] = [];
  show = true;
  markdownloc = '../../assets/Markdown/';
  constructor(private _dataService: DataService) {
    let _this = this;
    this._dataService.getMarkdown()
      .subscribe(res => {
        _this.markdown = res.map((x) => {
          return this.markdownloc + x
        });
        for (let index = 0; index < 5; index++) {
          console.log(this.markdown)
          console.log(this.progMarkdown)
          if (_this.markdown.length != 0 && _this.markdown !== undefined) {
            _this.progMarkdown.push(_this.markdown.shift())
          }
        }
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
    this._dataService.postComment(comment).subscribe(
      x => console.log('onNext: %s', x),
      e => console.log('onError: %s', e),
      () => window.location.reload());
  }
  loadMore() {
    for (let index = 0; index < 5; index++) {
      if (this.markdown.length != 0 && this.markdown !== undefined) {
        console.log(this.markdown)
        console.log(this.progMarkdown)
        this.progMarkdown.push(this.markdown.shift())
      } else {
        this.show = false;
      }
    }
  }
  ngOnInit() {
  }

}
