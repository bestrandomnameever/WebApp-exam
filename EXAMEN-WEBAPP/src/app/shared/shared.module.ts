import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MainNavComponent } from './components';

import { ShowToAdminDirective } from './directives/show-admin.directive';
import { ShowToLoggedInDirective } from './directives/show-logged-in.directive';

@NgModule({
    declarations: [
        ShowToAdminDirective,
        ShowToLoggedInDirective
    ],
    imports: [ 
        RouterModule
     ],
     exports: [
         ShowToAdminDirective,
         ShowToLoggedInDirective
     ]
})
export class SharedModule {}