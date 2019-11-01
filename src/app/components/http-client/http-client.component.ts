import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Todo {
  id?: number,
  title: string,
  completed: boolean
}

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.scss']
})
export class HttpClientComponent implements OnInit {

  todos: Todo[] = [] 

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=2')
    .subscribe((todos) => {
      console.log(todos)
      this.todos = todos
    })
  }

}
