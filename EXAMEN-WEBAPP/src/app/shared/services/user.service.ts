import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { ReplaySubject } from "rxjs/ReplaySubject";


import { User } from './../classes/user';

import { ApiService } from './api.service';
import { JwtService } from './jwt.service';

@Injectable()
export class UserService {
    private currentUserSubject = new BehaviorSubject<User>(new User());
    public currentUser = this.currentUserSubject.asObservable().distinctUntilChanged();

    private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
    public isAuthenticated = this.isAuthenticatedSubject.asObservable();

    constructor(
        private apiService: ApiService,
        private jwtService: JwtService
    ) { }

    // Verify JWT in localstorage with server & load user's info.
    // This runs once on application startup.
    populate() {
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
    }

    setAuth(user: User) {
        // Save JWT sent from server in localstorage
        this.jwtService.saveToken(user.token);
        // Set current user data into observable
        this.currentUserSubject.next(user);
        // Set isAuthenticated to true
        this.isAuthenticatedSubject.next(true);
    }

    purgeAuth() {
        // Remove JWT from localstorage
        this.jwtService.destroyToken();
        // Set current user to an empty object
        this.currentUserSubject.next(new User());
        // Set auth status to false
        this.isAuthenticatedSubject.next(false);
    }

    loginOrRegister(type, credentials): Promise<User> {
        const path = type === "login" ? "/login" : ""
        return this.apiService.post('/users' + path, { user: credentials })
            .map(
            data => {
                this.setAuth(data.user);
                /*this.currentUser.take(1).subscribe(
                    data => {
                        console.log(data);
                    },
                    err => {
                        console.log(err);
                    }
                )*/
                return data;
            }
            ).toPromise();
    }
}