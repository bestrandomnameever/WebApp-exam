import { MangaService } from './../shared/services/mangas.service';
import { DialogsService } from './../shared/dialogs/dialogs.service';
import { Component, OnInit } from '@angular/core';

import { Manga } from './../shared/classes/manga';
import { ActivatedRoute, Router } from "@angular/router";

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
        private router: Router
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
                .then(res => {
                    console.log(res);
                    this.router.navigateByUrl('/');
                })
                .catch(err => {
                    console.log(err);
                });
            }
        });
    }
}