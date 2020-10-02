import { MyTodoService } from './../services/my-todo.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  errorMessage = '';
  title = 'first-assignment';
  public name : string;
  public password : string;
  constructor(private router: Router, private myTodoService: MyTodoService) { }
  

  ngOnInit(): void {

  }
  login(){
    console.log(this.name, this.password);
    let ret = this.myTodoService.Login(this.name, this.password);
    console.log(ret);
    if(ret){
      this.router.navigate(['/home']);
    } else {
      this.errorMessage = 'Invalid username or password.';
    }
  }

  Register(){
    this.router.navigate(['/register']);
  }
}
