

import { Injectable } from '@angular/core';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})


export class MyTodoService {
  globalId: number = 1;
  myTodos = [];
  users : User[] = [];
  constructor() { }

  Add(todo) {
    todo.id = this.globalId;
    this.globalId++;
    this.myTodos.push(todo);
  }

  getAllTodos() {
    return this.myTodos;
  }
  DeleteTodo(todo) {
    // Remove the todo item from this.mytodos
    const index = this.myTodos.indexOf(todo);
    if (index > -1) {
      this.myTodos.splice(index, 1);
    }
  }

  Register(username:string, password:string){
    let user = new User(username, password);
    this.users.push(user);
    console.log(this.users);
  }

  Login(username : string, password: string){
    let valid = false;
    this.users.forEach(user => {
      if(user.name === username && user.password === password){
        valid = true;
      }
    });
    return valid;
  }
}
