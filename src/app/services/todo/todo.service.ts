import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, delay} from 'rxjs/operators';

export interface Todo {
  id?: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) {
  }

  addTodo(todo: Todo): Observable<Todo> {
    /*
    * создаём свои заголовки
    * */
    const headers = new HttpHeaders({
      MyCustomHeader: Math.random().toString()
    });
    return this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos', todo, {headers});

  }

  fetchTodos(): Observable<Todo[]> {

    // 1 способ
    // если необходимо передать только один параметр, то и спользуем set
    // const params = new HttpParams().set('_limit', '2');

    // 2 способ
    // если необходимо присвоить несколько параметров используем эту конструкцию с append
    // let params = new HttpParams(); // здесь обязательно используем let, так как ниже переопределяем params
    // params = params.append('_limit', '2');
    // params = params.append('test', '2');

    // 3 способ
    const params = new HttpParams({
      fromObject: { _limit: '2'}
    });

    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos', { params })
      .pipe(
        delay(500), // исскуственная задержка
        catchError(error => { // отлавливаем ошибку
          console.log('Error: ', error.message);
          return throwError(error);
        })
      );
  }

  removeTodo(id: number): Observable<void> {
    return this.http.delete<void>(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .pipe(delay(500)); // исскуственная задержка
  }

  complete(id: number): Observable<Todo> {
    return this.http.put<Todo>(`https://jsonplaceholder.typicode.com/todos/${id}`, {completed: true})
      .pipe(delay(500)); // исскуственная задержка
  }
}
