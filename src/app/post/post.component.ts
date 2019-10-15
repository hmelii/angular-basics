import { Component, Input, OnInit, SimpleChanges, ContentChild, ElementRef, OnChanges, SimpleChange, DoCheck, AfterContentChecked, AfterContentInit } from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, OnChanges, DoCheck, AfterContentInit {

  @Input() post: Post
  @ContentChild('info', { static: true }) infoRef: ElementRef

  constructor() {
    console.log('constructor')
   }

  ngOnInit() {
    console.log('ngOnInit')
    console.log(this.infoRef.nativeElement)
  }

  ngOnChanges(changes: SimpleChanges):void {
    console.log('ngOnChanges', changes)
  }

  ngDoCheck():void {
    console.log('ngDoCheck')
  }

  ngAfterContentInit():void {
    console.log('ngAfterContentInit')
  }

}
