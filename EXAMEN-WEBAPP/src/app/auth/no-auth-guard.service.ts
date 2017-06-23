import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

//To prevent anyone logged in to access the pages

@Injectable()
export class NoAuthGuard {
    constructor(
        private router: Router
    ) { }
}