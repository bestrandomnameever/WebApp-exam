import { Injectable } from '@angular/core';
import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';

import { Observable } from 'rxjs/Rx';

import { CoverPickerDialog } from './cover-picker.component';
import { ImportFromMangaUpdatesComponent } from './import-from-mu.component';

@Injectable()
export class DialogsService {
    constructor(private dialog: MdDialog) { }

    public openCoverPickerDialog(id: string = "", title: string = "", height: number = 700, width: number = 600): Promise<any> {
        let dialogRef: MdDialogRef<CoverPickerDialog>;

        dialogRef = this.dialog.open(CoverPickerDialog, {
            height: height + 'px',
            width: width + 'px',
        });
        dialogRef.componentInstance.id = id;
        dialogRef.componentInstance.title = title;

        return dialogRef.afterClosed().toPromise();
    }

    public openImportFromMangaUpdatesDialog(height: number = 700, width: number = 600): Promise<any> {
        let dialogRef: MdDialogRef<ImportFromMangaUpdatesComponent>;

        dialogRef = this.dialog.open(ImportFromMangaUpdatesComponent, {
            height: height + 'px',
            width: width + 'px',
        });

        return dialogRef.afterClosed().toPromise();
    }
}