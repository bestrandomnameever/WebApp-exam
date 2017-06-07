import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CoverPickerDialog } from './cover-picker.component';
import { DialogsService } from './dialogs.service';


@NgModule({
    declarations: [
        CoverPickerDialog
    ],
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule
    ],
    exports: [
        CoverPickerDialog
    ],
    providers: [
        DialogsService,
    ],
    entryComponents: [
        CoverPickerDialog
    ]
})
export class DialogsModule { }