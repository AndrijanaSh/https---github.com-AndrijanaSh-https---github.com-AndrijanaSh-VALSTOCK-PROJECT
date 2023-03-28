import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

type UserState = { loggedIn: boolean };

@Injectable({
  providedIn: 'root'
})
export class UserService {
  registerForm: FormGroup;
  submitted = false;




  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }


  login() {
    // check username and pass

    localStorage.setItem('userState', JSON.stringify({ loggedIn: true }));
    this.router.navigateByUrl('/dashboard')
  }

  logout() {
    localStorage.setItem('userState', JSON.stringify({ loggedIn: false }));
    this.router.navigateByUrl('/login')
  }

  isLoggedIn() {
    const userStateStr = localStorage.getItem('userState');
    if (!userStateStr) return false;

    const userState = JSON.parse(userStateStr) as UserState;
    return userState.loggedIn;
  }
}
