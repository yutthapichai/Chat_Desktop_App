import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import {environment} from '../environments/environment';
import { AppRoutingModule} from './routes';

import { AuthService } from './service/auth.service';
import { AuthguardService } from './service/authguard.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.config),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AppRoutingModule
  ],
  providers: [
    AuthguardService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
