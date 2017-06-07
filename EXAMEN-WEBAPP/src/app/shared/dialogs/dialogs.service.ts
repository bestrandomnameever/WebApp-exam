
import { Observable } from 'rxjs/Rx';
import { CoverPickerDialog } from './cover-picker.component';
import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';
import { Injectable } from '@angular/core';

@Injectable()
export class DialogsService {
    constructor(private dialog: MdDialog){}

    public openCoverPickerDialog(id: string= ""): Promise<any> {
        let dialogRef: MdDialogRef<CoverPickerDialog>;

        dialogRef = this.dialog.open(CoverPickerDialog);
        dialogRef.componentInstance.id = id;

        return dialogRef.afterClosed().toPromise();
    }
}