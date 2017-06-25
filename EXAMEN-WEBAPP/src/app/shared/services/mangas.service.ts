import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

import 'rxjs/add/operator/toPromise';

import { Manga } from '../';

@Injectable()
export class MangaService {
    constructor(
        private apiService: ApiService
    ) { }

    getMangaWithSlug(slug: string): Promise<Manga> {
        return this.apiService.get('/mangas/' + slug).toPromise().then(res => {
            return this.responseToManga(res.manga);
        });
    }

    getAllMangas(from: number = 0, to: number = 100): Promise<any[]> {
        return this.apiService.get('/mangas').toPromise().then(res => res.mangas);
    }

    getMangasMatching(searchTerm: String): Promise<any[]> {
        return this.apiService.get('/mangas/search/' + searchTerm).toPromise();
    }

    addManga(manga: Manga): Promise<Manga> {
        return this.apiService.post('/mangas', {
            "manga": manga.toJSON()
        }).toPromise().then(res => {
            return this.responseToManga(res.manga);
        });
    }

    editMangaWithSlug(manga: Manga): Promise<Manga> {
        return this.apiService.put('/mangas/' + manga.slug, {
            "manga": manga.toJSON()
        }).toPromise()
        .then( res => {
            return this.responseToManga(res.manga);
        });
    }

    deleteMangaWithSlug(slug: string): Promise<Manga> {
        return this.apiService.delete('/mangas/' + slug).toPromise().then(res => {
            return this.responseToManga(res.manga);
        });
    }

    isMangaWithSlugFavorited(slug: string): Promise<Boolean> {
        return this.apiService.get('/mangas/' + slug + "/isfavorite").toPromise().then(res => {
            return res.isFavorited;
        });
    }

    favoriteMangaWithSlug(slug: string): Promise<any> {
        return this.apiService.put('/mangas/' + slug + "/favorite").toPromise().then(res => {

        });
    }

    unfavoriteMangaWithSlug(slug: string): Promise<any> {
        return this.apiService.put('/mangas/' + slug + "/unfavorite").toPromise().then(res => {
            
        });
    }

    private responseToManga(responseManga): Manga {
        let manga = new Manga();

        manga.alternativeTitles = responseManga.alternativeTitles;
        manga.artist = responseManga.artist;
        manga.author = responseManga.author;
        manga.categories = responseManga.categories;
        manga.coverUrl = responseManga.coverUrl;
        manga.genres = responseManga.genres;
        manga.isCompleted = responseManga.isCompleted;
        manga.slug = responseManga.slug;
        manga.synopsis = responseManga.synopsis;
        manga.title = responseManga.title;
        manga.type = responseManga.type;

        return manga;
    }
}