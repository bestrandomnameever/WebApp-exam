import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { MangaService } from './../../services/mangas.service';
import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';

import { Manga } from './../../classes/manga';
@Component({
    selector: 'favorite-btn',
    templateUrl: './favorite-btn.component.html',
    styleUrls: ['./favorite-btn.component.scss']
})
export class FavoriteButtonComponent implements OnInit {
    constructor(
        private mangaService: MangaService,
        private router: Router,
        private userService: UserService
    ) { }

    @Input()
    mangaSlug: string;
    @Output()
    onToggle = new EventEmitter<boolean>();
    isSubmitting = false;
    favorited: boolean = false;

    ngOnInit(): void {
        this.userService.isAuthenticated.subscribe(auth => {
            if (auth) {
                this.mangaService.isMangaWithSlugFavorited(this.mangaSlug)
                    .then(isFavorited => {
                        this.favorited = isFavorited
                    })
                    .catch(err => {
                        console.log("Problem with auth");
                    })
            }
        })
    }

    toggleFavorite() {
        this.isSubmitting = true;

        if (this.favorited) {
            this.mangaService.unfavoriteMangaWithSlug(this.mangaSlug)
                .then(result => {
                    this.favorited = false;
                    this.isSubmitting = false;
                }).catch(err => {
                    this.isSubmitting = false;
                    console.log(err);
                })
        } else {
            this.mangaService.favoriteMangaWithSlug(this.mangaSlug)
                .then(result => {
                    this.favorited = true;
                    this.isSubmitting = false;
                }).catch(err => {
                    this.isSubmitting = false;
                    console.log(err);
                })
        }
    }
}