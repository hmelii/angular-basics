import { Component, OnInit } from '@angular/core';
import {Todo, TodoService} from '../../services/todo/todo.service';



@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.scss']
})
export class HttpClientComponent implements OnInit {

  todos: Todo[] = [];
  todoTitle = '';
  loading = false;
  error = '';

  constructor( private todoService: TodoService /* в случае если у нас простое приложение private http: HttpClient*/) { }

  ngOnInit() {
    this.fetchTodos();
  }

  addTodo() {
    if (this.todoTitle.trim() === '') {
      return;
    }

    const newTodo: Todo = {
      title: this.todoTitle,
      completed: false
    };

    this.todoService.addTodo(newTodo)
      .subscribe((todo) => {
        this.todos.push(todo);
        this.todoTitle = '';
      });

    /** В случае если у нас простое приложение то http запросы мы делаем внутри компонента
    this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos', newTodo)
    .subscribe((todo) => {
      this.todos.push(todo);
      this.todoTitle = '';
    });
     */
  }

  fetchTodos() {
    this.loading = true;
    this.todoService.fetchTodos()
      .subscribe((todos) => {
        this.todos = todos;
        this.loading = false;
      }, error => { // первый способ поймать ошибку от сервера Второй - описывается внутри сервиса
        this.error = error.message;
      }, () => {
        console.log('Выполняется в конце стрима в любом случае');
      });

    /** В случае если у нас простое приложение то http запросы мы делаем внутри компонента
    this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=2')
      .pipe(delay(1500)) // исскуственная задержка
      .subscribe((todos) => {
        this.todos = todos;
        this.loading = false;
      });
     */
  }

  removeTodo(id: number) {
    this.loading = true;

    this.todoService.removeTodo(id)
      .subscribe(() => {
        this.todos = this.todos.filter(todo => todo.id !== id);
        this.loading = false;
      });

    /** В случае если у нас простое приложение то http запросы мы делаем внутри компонента
    this.http.delete<void>(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .pipe(delay(1500)) // исскуственная задержка
      .subscribe(() => {
        this.todos = this.todos.filter(todo => todo.id !== id);
        this.loading = false;
      });
     */
  }

  complete(id: number) {
    this.loading = true;
    this.todoService.complete(id)
      .subscribe((response) => {
        this.todos.find(todo => todo.id === response.id).completed = response.completed
        this.loading = false;
      });
  }
}
