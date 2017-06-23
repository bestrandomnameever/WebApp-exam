import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MdButtonModule } from '@angular/material';
import { MdInputModule } from "@angular/material";

import { AuthComponent } from './auth.component';

import { NoAuthGuardService } from './../shared/services/no-auth-guard.service';

const authRouting = RouterModule.forChild([
    {
        path: 'login',
        component: AuthComponent,
        //canActivate: [NoAuthGuardService]
    },
    {
        path: 'register',
        component: AuthComponent,
        //canActivate: [NoAuthGuardService]
    }
]);

@NgModule({
    declarations: [
        AuthComponent
    ],
    imports: [
        authRouting,
        CommonModule,
        FormsModule,
        MdButtonModule,
        MdInputModule,
        ReactiveFormsModule
    ],
    providers: []
})
export class AuthModule { }