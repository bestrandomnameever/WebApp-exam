import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MainNavComponent } from './components';

import { ShowToLoggedInDirective } from './directives/show-logged-in.directive';

@NgModule({
    declarations: [
        ShowToLoggedInDirective
    ],
    imports: [ 
        RouterModule
     ],
     exports: [
         ShowToLoggedInDirective
     ]
})
export class SharedModule {}