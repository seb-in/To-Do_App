import { MyTodoService } from './../services/my-todo.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public username: string = '';
  public password: string = '';
  confirmpassword: string = '';
  errorMessage : string = '';

  constructor(private myTodoService: MyTodoService, private router: Router) { }

  ngOnInit(): void {
  }

  Register() {
    if(this.username === ''){
      this.errorMessage = 'Invalid user name. username cannot be empty.';
    } else if(this.password !== this.confirmpassword){
      this.errorMessage = 'Password is not matching.';
    }else if(this.password === ''){
      this.errorMessage = 'Invalid password. password cannot be empty.';
    } else {
      // do the registration.
      this.myTodoService.Register(this.username, this.password);
      // re direct to login page.
      this.router.navigate(['login']);
    }
  }

}
