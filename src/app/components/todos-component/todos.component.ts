import { Component } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
  host: {['class']: 'col-12'}
})
export class TodoComponent {
  constructor() {
   
  }
}