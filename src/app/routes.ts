import {  Routes } from '@angular/router';

import { LoginPageComponent } from './components/login-page/login-page.component';
import { SignupPageComponent } from './components/signup-page/signup-page.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: SignupPageComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

export default routes;