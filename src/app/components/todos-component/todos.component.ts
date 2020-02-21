import { Component, ViewChild } from '@angular/core';
import { TodoService, Todo } from '../../services/todo.service';
import { Observable, of } from 'rxjs';
import { MatPaginator, MatTableDataSource } from '@angular/material';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
  host: {['class']: 'col-12'}
})
export class TodoComponent {
  @ViewChild(MatPaginator, {}) paginator: MatPaginator;

  public todos: Observable<Todo[]> = of([]);
  public columnsToDisplay = [ 'id','status', 'title', 'date', "delete"];
  public dataSource: MatTableDataSource<Todo>;

  constructor(
   private todo:  TodoService
  ) {
    
   this.todos = this.todo.getTodos()
   
   this.todos.subscribe( 
     (result: Todo[] ) => {
      this.dataSource = new MatTableDataSource<Todo>(result);
      this.dataSource.paginator = this.paginator;
     }  
   );
  }

  ngOnInit( ){
    
  }

  dateChange( event, todo) {
    todo.date = event.value;
    this.todo.todo( todo, 'put').subscribe( res => console.log( res ));
  }

  updateComplete(  todo ){

    // todo.complete = event.
    this.todo.todo( todo, 'put').subscribe( res => console.log( res ));
  }

  updateTitle( todo ){
    const patch = {title: todo.title, id: todo.id};
    this.todo.todo( patch, 'patch').subscribe( res => console.log( res ));
  }

}