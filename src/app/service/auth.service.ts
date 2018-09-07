import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore} from 'angularfire2/firestore';

import { Constants } from '../constants';
@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private authState: any;

  constructor(
    private router: Router,
    private afauth: AngularFireAuth,
    private afstore: AngularFirestore
  ) {
    this.afauth.authState.subscribe((user) => {
      this.authState = user;
      // console.log('constructor : ', user.uid);
    });
   }

  authUser(): boolean {
    return this.authState !== null && this.authState !== undefined ? true : false;
  }

  get currentUserId(): string {
    return this.authState !== null ? this.authState.uid : '';
  }

  Signup(userCreate) {
    return this.afauth.auth.createUserWithEmailAndPassword(userCreate.email, userCreate.password)
    .then((user) => {
      this.authState = user;
      this.afauth.auth.currentUser.updateProfile({
        displayName: userCreate.displayName,
        photoURL: Constants.PROFILE_PIC
      }).then(() => {
        this.setUserData(userCreate.email, userCreate.displayName, Constants.PROFILE_PIC);
      });
    });
  }

  setUserData(email: string, displayName: string, photoURL: string) {
    const path = `users/${this.currentUserId}`;
    const stateuspath = `status/${this.currentUserId}`;
    const userdoc = this.afstore.doc(path);
    const status = this.afstore.doc(stateuspath);
    userdoc.set({
      email: email,
      displayName: displayName,
      photoURL: photoURL
    });
    status.set({
      email: email,
      status: 'online'
    });
    this.router.navigate(['dashboard']);
  }

  Login(userData) {
    return this.afauth.auth.signInWithEmailAndPassword(userData.email, userData.password)
    .then(
      (user) => {
        console.log(user);
        this.authState = user;
        console.log(this.currentUserId);
        const status = 'online';
        this.setUserStatus(status);
        this.router.navigate(['dashboard']);
      }
    ).catch(e => console.log('Something : ', e.message ));
  }

  setUserStatus(data) {
    const statuscollection = this.afstore.doc(`status/${this.currentUserId}`);
    return statuscollection.update({ status: data }).catch(e => console.log(e));
  }

  logout() {
    this.afauth.auth.signOut()
    .then(() => {
      this.router.navigate(['login']);
    })
    .catch(e => console.log(e));
  }

}
