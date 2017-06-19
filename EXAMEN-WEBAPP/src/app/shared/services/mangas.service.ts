import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

import 'rxjs/add/operator/toPromise';

import { Manga } from '../';

@Injectable()
export class MangaService {
    constructor(
        private apiService: ApiService
    ) {}

    getMangaWithSlug(slug: string): Promise<Manga> {
        return this.apiService.get('/mangas/' + slug).toPromise().then(res => {
            var manga = new Manga();
            manga.slug = res.slug;
            
            manga.alternativeTitles = res.alternativeTitles;
            manga.artist = res.artist;
            manga.categories = res.categories;
            manga.coverUrl = res.coverUrl;
            manga.genres = res.genres;
            manga.isCompleted = res.isCompleted;
            manga.synopsis = res.synopsis;
            manga.title = res.title;
            manga.type = res.type;
            return manga;
        });
    }

    getAllMangas(from: number = 0, to: number = 100): Promise<any[]> {
        return this.apiService.get('/mangas').toPromise().then(res => res.mangas);
    }

    addManga(manga: Manga): Promise<Object> {
        //console.log(manga.toJSON());
         return this.apiService.post('/mangas', {
             "manga": manga.toJSON()
         }).toPromise();
    }
}