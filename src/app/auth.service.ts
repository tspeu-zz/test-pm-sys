import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {
  isLoggedIn: boolean = false;

  login() {
    return Observable.of(true).delay(100).do(val => this.isLoggedIn = true);
    //this.isLoggedIn = true;
  }

  logout() {
    return Observable.of(false).delay(100).do(val => this.isLoggedIn = false);
  }
}