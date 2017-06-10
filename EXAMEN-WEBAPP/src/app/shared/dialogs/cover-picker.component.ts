import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { MdTabChangeEvent } from '@angular/material';

import { MangaCoversDBService } from '../';

@Component({
    selector: 'cover-picker-dialog',
    templateUrl: './cover-picker.component.html',
    styleUrls: ['./cover-picker.component.scss']
})
export class CoverPickerDialog {
    id: string;
    title: string;

    titleSearchField = "";
    imgUrlSearchField = "";
    idSearchField = "";

    selectedCover: string;
    isSelectedCover = false;

    searchResults = [];
    covers: string[] = [];

    constructor(
        public dialogRef: MdDialogRef<CoverPickerDialog>,
        private coverdbservice: MangaCoversDBService
    ) { }

    ngOnInit() {
        if(this.title && this.title !== "") {
            this.titleSearchField = this.title;
            this.coverdbservice.searchMangaCoverDBWithTitle(this.title).then(res => {
                this.searchResults = res;
            });
        }
    }

    resetCoversArrays(event: MdTabChangeEvent) {
        this.covers = [];
        if(this.title && this.title !== "" && event.index == 0) {
            this.titleSearchField = this.title;
            this.coverdbservice.searchMangaCoverDBWithTitle(this.title).then(res => {
                this.searchResults = res;
            });
        }
        if (this.id && this.id !== "" && event.index == 2) {
            this.idSearchField = this.id;
            this.coverdbservice.getCoversFromuID(this.id).then(res => {
                this.covers = res;
            });
        }
    }

    searchForImgUrl() {
        this.covers.push(this.imgUrlSearchField);
    }

    searchForIdOrLink() {
        const filteredId = this.idSearchField.split('id=').length > 1 ? this.idSearchField.split('id=')[1] : this.idSearchField;
        this.coverdbservice.getCoversFromuID(filteredId).then(res => {
            this.covers = res;
            console.log(res);
        });
    }

    searchForTitle() {
        this.coverdbservice.searchMangaCoverDBWithTitle(this.titleSearchField).then(res => {
            this.searchResults = res;
        });
    }

    selectTitle(id: string) {
        this.id = id;
        this.coverdbservice.getCoversFromuID(id).then(res => {
            this.covers = res;
        });
    }

    toggleSelectCover(cover: string) {
        console.log(cover);

        const el = event.srcElement;
        if (cover === this.selectedCover) {
            this.selectedCover = null;
            this.isSelectedCover = false;
        } else {
            this.selectedCover = cover;
            this.isSelectedCover = true;
        }
    }
}

