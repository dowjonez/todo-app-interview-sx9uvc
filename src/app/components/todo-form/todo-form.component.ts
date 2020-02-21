import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TodoService } from 'src/app/services/todo.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  public title: FormControl = new FormControl('');
  public date: FormControl = new FormControl(new Date())
  constructor( public svc: TodoService, private router: Router) { }

  ngOnInit() {
  }
  handleClick(){
    this.svc.todo({
      title: this.title.value,
      date: this.date.value
    }, 'post' ).subscribe( res  => {

      this.router.navigate(['/todo/' + res.id])
    });
  }
}
