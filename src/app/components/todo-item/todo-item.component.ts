import { Component, OnInit, Input } from '@angular/core';

import { Todo , TodoService } from 'src/app/services/todo.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Observable<any>;
  constructor(
    private svc: TodoService,
    private route:ActivatedRoute
  ) { 
    
    this.todo = this.svc.getTodos(this.route.snapshot.params.id);
  }

  ngOnInit() {

  }

}
