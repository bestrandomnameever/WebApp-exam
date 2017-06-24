import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CoverPickerDialog } from './cover-picker.component';
import { ImportFromMangaUpdatesComponent } from './import-from-mu.component';
import { YesNoDialogComponent } from './yes-no.component';

import { DialogsService } from './dialogs.service';


@NgModule({
    declarations: [
        CoverPickerDialog,
        ImportFromMangaUpdatesComponent,
        YesNoDialogComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule
    ],
    exports: [
        CoverPickerDialog,
        ImportFromMangaUpdatesComponent,
        YesNoDialogComponent
    ],
    providers: [
        DialogsService,
    ],
    entryComponents: [
        CoverPickerDialog,
        ImportFromMangaUpdatesComponent,
        YesNoDialogComponent
    ]
})
export class DialogsModule { }