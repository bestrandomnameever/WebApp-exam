import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";

import { UserService } from './../shared/services/user.service';

@Component({
    selector: 'auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
    authForm: FormGroup;
    authType: string;
    isSubmitting: boolean = false;
    title: string = '';

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private fb: FormBuilder,
        private userService: UserService
    ) {
        this.authForm = this.fb.group({
            'email': ['', Validators.compose([Validators.email, Validators.required])],
            'password': ['', Validators.required]
        });
    }

    ngOnInit() {
        this.route.url.subscribe(data => {
            // Get the last piece of the URL (it's either 'login' or 'register')
            this.authType = data[data.length - 1].path;
            // Set a title for the page accordingly
            this.title = (this.authType === 'login') ? 'Sign in' : 'Sign up';
            // add form control for username if this is the register page
            if (this.authType === 'register') {
                this.authForm.addControl('username', new FormControl());
            }
        });
    }

    submitForm() {
        this.isSubmitting = true;

        const credentials = this.authForm.value;
        this.userService.loginOrRegister(this.authType, credentials).then(res => {
            //console.log(res);
            this.isSubmitting = false;
        }).catch(err => {
            //console.log(err);
            this.isSubmitting = false;
        });
    }
}