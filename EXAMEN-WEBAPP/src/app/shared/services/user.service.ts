import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

import { User } from './../classes/user';

import { ApiService } from './api.service';

@Injectable()
export class UserService {

    constructor(
        private apiService: ApiService
    ) {}

    /*populate() {
    // If JWT detected, attempt to get & store user's info
    if (this.jwtService.getToken()) {
      this.apiService.get('/user')
      .subscribe(
        data => this.setAuth(data.user),
        err => this.purgeAuth()
      );
    } else {
      // Remove any potential remnants of previous auth states
      this.purgeAuth();
    }
  }*/

  loginOrRegister(type, credentials): Promise<User> {
      const path = type === "login" ? "/login" : ""
    return this.apiService.post('/users' + path, {user: credentials})
    .map(
      data => {
        //this.setAuth(data.user);
        return data;
      }
    ).toPromise();
  }
}