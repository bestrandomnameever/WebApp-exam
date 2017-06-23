import { Directive, Input, OnInit, ViewContainerRef, TemplateRef } from '@angular/core';

import { UserService } from './../services/user.service';

@Directive({
    selector: '[showToLoggedIn]',
})
export class ShowToLoggedInDirective implements OnInit {

    condition: boolean = true;

    constructor(
        private templateRef: TemplateRef<any>,
        private userService: UserService,
        private viewContainer: ViewContainerRef
    ) { }

    ngOnInit() {
        this.userService.isAuthenticated.subscribe(
            (isLoggedIn) => {
                if (isLoggedIn && this.condition || !isLoggedIn && !this.condition) {
                    this.viewContainer.createEmbeddedView(this.templateRef);
                } else {
                    this.viewContainer.clear();
                }
            }
        )
    }

    @Input() set showToLoggedIn(condition: boolean) {
        this.condition = condition;
    }
}