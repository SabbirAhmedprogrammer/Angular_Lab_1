import { Component, OnInit } from '@angular/core';
import { Todo } from '../interfaces/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos: Todo[] = [
    { task: "Make S'mores", completed: true },
    { task: "Finish this to-do list", completed: false },
    { task: "Order Camera bag", completed: false },
    { task: "Order random stuff", completed: true },
  ];



  constructor() { }

  ngOnInit(): void {
  }

}
