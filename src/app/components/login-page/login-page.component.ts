import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { AuthService } from '../../service/auth.service';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit() {
  }

  toSignup() {
    this.router.navigate(['signup']);
  }

  onLogin(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.auth.Login({ email: form.value.email, password: form.value.password });
  }

}
