import { MyTodoService } from './../services/my-todo.service';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../Todo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public myTodos: Todo[];
  constructor(private myTodoService : MyTodoService, private router: Router) {
  }
  ngOnInit(): void {
    this.myTodos = this.myTodoService.getAllTodos();
  }

  AddTodo(){
    this.router.navigate(['addtodo']);
  }
  EditTodo(todo) {

  }

  DeleteTodo(todo) {
    this.myTodoService.DeleteTodo(todo);
    this.myTodos = this.myTodoService.getAllTodos();
  }
}
