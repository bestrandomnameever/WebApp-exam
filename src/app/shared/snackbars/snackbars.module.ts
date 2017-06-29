import { NgModule } from '@angular/core';
import { MdSnackBarModule } from '@angular/material';

import { SnackbarsService } from './snackbars.service';


@NgModule({
    providers: [SnackbarsService],
})
export class SnackbarsModule { }