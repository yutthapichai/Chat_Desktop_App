import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import * as Rx from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser = new Rx.BehaviorSubject<firebase.User>(this.afauth.auth.currentUser);
  constructor(private afauth: AngularFireAuth) {
    this.afauth.authState.subscribe((user: firebase.User) => {
      this.currentUser.next(user);
    });
  }
}
