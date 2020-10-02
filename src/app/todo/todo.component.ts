import { MyTodoService } from './../services/my-todo.service';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../Todo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  public todo:Todo;
  constructor(private myService : MyTodoService, private router: Router) {
    this.todo = new Todo();
  }

  ngOnInit(): void {
  }

  Add(){
    this.myService.Add(this.todo);
    this.router.navigate(['home']);
  }

}
