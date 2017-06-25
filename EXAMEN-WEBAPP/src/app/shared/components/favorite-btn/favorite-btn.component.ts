import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { MangaService } from './../../services/mangas.service';
import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';

import { Manga } from './../../classes/manga';
@Component({
    selector: 'selector',
    templateUrl: './favorite-btn.component.html',
    styleUrls: ['./favorite-btn.component.scss']
})
export class FavoriteButtonComponent {
    constructor(
        private mangaService: MangaService,
        private router: Router,
        private userService: UserService
    ) { }

    @Input()
    manga: Manga;
    @Output()
    onToggle = new EventEmitter<boolean>();
    isSubmitting = false;

    toggleFavorite() {
        this.isSubmitting = true;

        this.userService.isAuthenticated.subscribe((auth) => {
            if (!auth) {
                this.router.navigateByUrl('/auth');
            }

            this.mangaService.isMangaWithSlugFavorited(this.manga.slug).then(isFavorited => {
                console.log(isFavorited);
            });
        })
    }
}