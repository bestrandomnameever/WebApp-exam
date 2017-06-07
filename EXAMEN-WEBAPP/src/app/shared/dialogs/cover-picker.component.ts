import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material';

import { MangaCoversDBService } from '../';

@Component({
    selector: 'cover-picker-dialog',
    templateUrl: './cover-picker.component.html',
    styleUrls: ['./cover-picker.component.scss']
})
export class CoverPickerDialog {
    id: string;
    searchField = "";

    selectedCover: string;
    isSelectedCover = false;
    covers: string[];

    constructor(
        public dialogRef: MdDialogRef<CoverPickerDialog>,
        private coverdbservice: MangaCoversDBService
    ) { }

    ngOnInit() {
        if (this.id && this.id !== "") {
            this.searchField = this.id;
            this.coverdbservice.getCoversFromuID(this.id).then(res => {
                this.covers = res;
            });
        }
    }

    searchForIdOrLink() {
        const filteredId = this.searchField.split('id=').length > 1 ? this.searchField.split('id=')[1] : this.searchField;
        this.coverdbservice.getCoversFromuID(filteredId).then(res => {
            this.covers = res;
        });
    }

    toggleSelectCover(event: Event) {
        const el = event.srcElement;
        if (el.getAttribute('src') === this.selectedCover) {
            this.selectedCover = null;
            this.isSelectedCover = false;
        } else {
            this.selectedCover = el.getAttribute('src');
            this.isSelectedCover = true;
        }
    }
}

