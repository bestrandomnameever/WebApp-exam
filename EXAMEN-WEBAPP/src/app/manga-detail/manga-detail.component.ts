import { MangaService } from './../shared/services/mangas.service';
import { DialogsService } from './../shared/dialogs/dialogs.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import { Manga } from './../shared/classes/manga';

import { SnackbarsService } from './../shared/snackbars/snackbars.service';

@Component({
    selector: 'manga-detail',
    templateUrl: './manga-detail.component.html',
    styleUrls: ['./manga-detail.component.scss']
})
export class MangaDetailComponent implements OnInit {
    manga: Manga = new Manga();

    constructor(
        private dialogsService: DialogsService,
        private mangaService: MangaService,
        private route: ActivatedRoute,
        private router: Router,
        private snackbarsService: SnackbarsService
    ) { }

    ngOnInit() {
        this.route.data.subscribe(
            (data: { manga: Manga }) => {
                this.manga = data.manga;
            }
        )
    }

    deleteManga() {
        this.dialogsService.openYesNoDialog('Delete manga', 'Are you really sure that you want to permanently delete this manga').then(result => {
            if (result) {
                this.mangaService.deleteMangaWithSlug(this.manga.slug)
                    .then(deletedManga => {
                        this.router.navigateByUrl('/');
                        this.snackbarsService.undoDeleteMangaSnackBar(deletedManga);
                    })
                    .catch(err => {
                        console.log(err);
                    });
            }
        });
    }
}