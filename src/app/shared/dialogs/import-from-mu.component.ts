import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from "@angular/material";
import { MangaUpdatesService } from "app/shared";

@Component({
    selector: 'import-mu',
    templateUrl: './import-from-mu.component.html',
    styleUrls: ['./general.scss','./import-from-mu.component.scss']
})
export class ImportFromMangaUpdatesComponent implements OnInit {

    selectedId: string;
    selectedIndex: number;
    titleSearchField: string;

    searchResults = [];

    constructor(
        public dialogRef: MdDialogRef<ImportFromMangaUpdatesComponent>,
        private mangaUpdatesService: MangaUpdatesService
    ) { }

    ngOnInit() { }

    searchForTitle() {
        this.mangaUpdatesService.getMangaIdsMatchingSearch(this.titleSearchField).then(mangas => {
            this.searchResults = mangas;
        })
    }

    toggleSelectTitle(index: number) {
        this.selectedIndex = index;
        this.selectedId = this.searchResults[index].id;
    }

    cancelDialog() {
        this.dialogRef.close();
    }

    submitDialog() {
        console.log(this.selectedId);
        this.dialogRef.close(this.selectedId);
    }
}