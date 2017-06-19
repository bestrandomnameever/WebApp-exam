import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CoverPickerDialog } from './cover-picker.component';
import { ImportFromMangaUpdatesComponent } from './import-from-mu.component';
import { DialogsService } from './dialogs.service';


@NgModule({
    declarations: [
        CoverPickerDialog,
        ImportFromMangaUpdatesComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule
    ],
    exports: [
        CoverPickerDialog,
        ImportFromMangaUpdatesComponent
    ],
    providers: [
        DialogsService,
    ],
    entryComponents: [
        CoverPickerDialog,
        ImportFromMangaUpdatesComponent
    ]
})
export class DialogsModule { }