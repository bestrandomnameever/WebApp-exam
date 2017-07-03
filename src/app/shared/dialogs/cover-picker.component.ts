import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { MdTabChangeEvent } from '@angular/material';

import { MangaCoversDBService } from '../';

@Component({
    selector: 'cover-picker-dialog',
    templateUrl: './cover-picker.component.html',
    styleUrls: ['./general.scss','./cover-picker.component.scss']
})
export class CoverPickerDialog {
    id: string;
    title: string;

    imgUrlSearchField = "";

    idSearchField = "";

    titleSearchField = "";
    selectedTitleIndex: number;
    searchResults = [];

    covers: string[] = [];
    selectedCover: string;
    isSelectedCover = false;


    constructor(
        public dialogRef: MdDialogRef<CoverPickerDialog>,
        private coverdbservice: MangaCoversDBService
    ) { }

    ngOnInit() {
        if (this.title && this.title !== "") {
            this.titleSearchField = this.title;
            this.coverdbservice.searchMangaCoverDBWithTitle(this.title).then(res => {
                this.searchResults = res;
            });
        }
    }

    resetCoversArrays(event: MdTabChangeEvent) {
        this.covers = [];
        if (this.title && this.title !== "" && event.index == 0) {
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
            this.selectedTitleIndex = undefined;
            this.covers = [];
            this.searchResults = res;
        });
    }

    toggleSelectTitle(id: string, index: number) {
        console.log(id, index);
        if (this.selectedTitleIndex == undefined) {
            this.selectedTitleIndex = index;
            this.coverdbservice.getCoversFromuID(id).then(res => {
                this.covers = res;
            });
        } else {
            this.selectedTitleIndex = undefined;
            this.covers = [];
        }
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

    cancelDialog() {
        this.dialogRef.close();
    }

    submitDialog() {
        this.dialogRef.close(this.selectedCover);
    }
}

