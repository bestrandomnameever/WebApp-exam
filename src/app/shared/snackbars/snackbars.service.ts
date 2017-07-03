import { Injectable } from '@angular/core';
import { MangaService } from 'app/shared';
import { MdSnackBar } from '@angular/material';
import { Router } from '@angular/router';

import { Manga } from './../classes/manga';

@Injectable()
export class SnackbarsService {
    constructor(
        private mangaService: MangaService,
        private router: Router,
        private snackBar: MdSnackBar,
    ) { }

    undoDeleteMangaSnackBar(deletedManga: Manga) {
        this.snackBar.open("Deleted manga " + deletedManga.title, "Undo", { duration: 4000 })
            .onAction()
            .subscribe(val => {
                this.mangaService.addManga(deletedManga).then(manga => {
                    this.router.navigateByUrl("/manga/" + manga.slug);
                }).catch(err => {
                    console.log(err);
                })
            });
    }
}