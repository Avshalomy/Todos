import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, 
         throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Todo }       from '../models/todo.model';

@Injectable()
export class TodosService {
  constructor(private http: HttpClient) {}

  private todos_service: string = 'http://localhost:5000/api/todos'; 

  getTodos(): Observable<Todo[]> {
    return this.http
      .get<Todo[]>(this.todos_service)
      .pipe(catchError((error: any) => throwError(error)));
  }

  createTodo(payload: Todo): Observable<Todo> {
    return this.http
      .post<Todo>(this.todos_service, payload)
      .pipe(catchError((error: any) => throwError(error)));
  }

  updateTodo(payload: Todo): Observable<Todo> {
    const newTodo: Todo = {name : payload.name};
    return this.http
      .put<Todo>(`${this.todos_service}/${payload.id}`, newTodo)
      .pipe(catchError((error: any) => throwError(error)));
  }

  removeTodo(payload: string): Observable<Todo> {
    return this.http
      .delete<any>(`${this.todos_service}/${payload}`)
      .pipe(catchError((error: any) => throwError(error)));
  }
}
