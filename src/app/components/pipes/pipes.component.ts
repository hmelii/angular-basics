import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

export interface Post {
  title: string
  text: string
}

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {
  
  e: number = Math.E

  str: string = 'Hello world'

  date: Date = new Date()

  float: number = 0.42

  obj = {
    a: 1,
    b: {
      c: 2,
      d: {
        e: 3,
        f: 4
      }
    }
  }

  searchFilter = 'title'

  posts: Post[] = [{
    title: 'JavaScript',
    text: 'джава Текст'
  },{
    title: 'ActionScript',
    text: 'Актион Текст'
  },{
    title: 'EcmaScript',
    text: 'Екма Текст'
  }]

  promise: Promise<string> = new Promise<string>(resolve => {
    setTimeout(() => {
      resolve('Promise resolved')
    }, 4000)
  })

  date$: Observable<Date> = new Observable(obs => {
    setInterval(() => {
        obs.next(new Date())
    }, 1000)
  })

  
  
  constructor() { 
    
  }


  
  /**
   * этот код нужен если не использовать pipe async
   */
  date3: Date
  ngOnInit(): void {
    this.date$.subscribe(date => {
      this.date3 = date
    })
  }
  /***/

  addPost() {
    this.posts.unshift({
      title: 'Angular',
      text: 'Еуые еуеуе'
    })
  }

}
