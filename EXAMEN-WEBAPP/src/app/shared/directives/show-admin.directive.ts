import { Directive, OnInit, TemplateRef, ViewContainerRef, Input } from '@angular/core';

import { UserService } from './../services/user.service';

@Directive({
    selector: '[showToAdmin]',
})
export class ShowToAdminDirective implements OnInit {

    constructor(
        private templateRef: TemplateRef<any>,
        private userService: UserService,
        private viewContainer: ViewContainerRef
    ) { }

    ngOnInit() {
        this.userService.isAdmin.subscribe(
            (isAdmin) => {
                if (isAdmin) {
                    this.viewContainer.createEmbeddedView(this.templateRef);
                } else {
                    this.viewContainer.clear();
                }
            }
        )
    }
}