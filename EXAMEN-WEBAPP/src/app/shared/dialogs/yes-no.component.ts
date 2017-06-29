import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
    selector: 'yes-no-dialog',
    templateUrl: './yes-no.component.html',
    styleUrls: ['./yes-no.component.scss']
})
export class YesNoDialogComponent {
    constructor(
        public dialogRef: MdDialogRef<YesNoDialogComponent>
    ) { }

    dialogTitle = "";
    dialogContent = "";
}