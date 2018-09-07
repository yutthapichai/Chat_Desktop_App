import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})

export class SignupPageComponent implements OnInit {

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit() {
  }

  toLogin() {
    this.router.navigate(['login']);
  }

  onSignup(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.auth.Signup({
      email: form.value.email,
      password: form.value.password,
      displayName: 'yut'
    });
  }
}
