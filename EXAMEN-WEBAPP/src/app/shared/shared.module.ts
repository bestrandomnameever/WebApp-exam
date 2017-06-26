import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FavoriteButtonComponent } from './components/favorite-btn/favorite-btn.component';
import { MainNavComponent } from './components';

import { ShowToAdminDirective } from './directives/show-admin.directive';
import { ShowToLoggedInDirective } from './directives/show-logged-in.directive';

@NgModule({
    declarations: [
        FavoriteButtonComponent,
        ShowToAdminDirective,
        ShowToLoggedInDirective
    ],
    imports: [ 
        CommonModule,
        RouterModule
     ],
     exports: [
         FavoriteButtonComponent,
         ShowToAdminDirective,
         ShowToLoggedInDirective
     ]
})
export class SharedModule {}