import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common'; // is check error.invalid

import { MaterialDesignModule} from './material.module';
import { AuthguardService } from './service/authguard.service';


import { LoginPageComponent } from './components/login-page/login-page.component';
import { SignupPageComponent } from './components/signup-page/signup-page.component';
import { DashboardComponent } from './components/Dashboard/dashboard.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: SignupPageComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];
// declartions is display component on brownser
@NgModule({
  declarations: [
    LoginPageComponent,
    SignupPageComponent,
    DashboardComponent,
    NavBarComponent,
    ProfileComponent,
    SidebarComponent
  ],
  imports: [RouterModule.forRoot(routes), MaterialDesignModule, CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
