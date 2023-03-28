import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  registerForm: FormGroup;
  submitted = false;


  constructor(private userService: UserService, private formBuilder: FormBuilder) { 
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });
  }

  get f() { return this.registerForm.controls; }
   


  onSubmit() {
    // event.preventDefault();
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
  }

    this.userService.login()
  }




}