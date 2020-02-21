import { Injectable } from '@angular/core';
import { SERVER_URL } from '../../variables';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Todo {
  id?: number
  name?: string
  title?: string
  status?: string  
  createdAt?: string
  updatedAt?: string
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private base ='https://jsonplaceholder.typicode.com'
  constructor(
    private http: HttpClient
  ) {

  }

  
  getTodos( id?: number ) : Observable<any>{
      const todoId = id != null ? '/' + id : "";
      return this.http.get(this.base + '/todos' + todoId, {});
  }

  postTodo( todo ): Observable<any> {
    return this.http.post( this.base + '/todos', {} );
  }

  todo( todo: any, method: string ){
    const todoId = todo.id != null ? '/' + todo.id : "";
    return this.http[method]( this.base + '/todos' + todoId, todo, {
      body: todo
    })
  }
}