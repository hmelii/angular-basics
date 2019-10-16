import { Component, Input, Output, EventEmitter, OnInit, SimpleChanges, ContentChild, ElementRef, OnChanges, SimpleChange, DoCheck, AfterContentChecked, AfterContentInit, OnDestroy, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush, // если передать этот параметр, то ангулар не будет перерисовывать компонет если мы не заменим весь пост
  encapsulation: ViewEncapsulation.None // отменяет инкапсулязию для стилей
})
export class PostComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, OnDestroy {

  @Input() post: Post
  @Output() onRemove: EventEmitter<number> = new EventEmitter<number>()

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

  ngOnDestroy():void {
    console.log('ngOnDestroy')
  }

  removePost() {
    this.onRemove.emit(this.post.id);
  }

}
