import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {

  token: string;
  user: Observable<firebase.User>;

  constructor(private firebaseAuth: AngularFireAuth) {
    this.user = firebaseAuth.authState;
  }

  signupUser(email: string, password: string) {
    this.firebaseAuth.auth.createUserWithEmailAndPassword(email, password).then((value) => {
      console.log('Success!', value),
      alert('Great');
    }).catch(error => alert('Oops, something wrong, please check'));
  }

  signinUser(email: string, password: string) {
    this.firebaseAuth.auth.signInWithEmailAndPassword(email, password)
      .then(
        response => {
          firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) => this.token = token
            )
        }
        )
      .catch(
        error => alert('No such user, please sign up, and try again!'),
      );
  }

  logout() {
    this.firebaseAuth.auth.signOut();
    this.token = null;
  }


}
