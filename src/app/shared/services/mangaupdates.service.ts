import { Injectable } from '@angular/core';
import { ApiService } from "./api.service";

import { Manga } from './../classes/manga';

@Injectable()
export class MangaUpdatesService {

    constructor(
        private apiService: ApiService
    ){}

    getMangaInfoFromId(id: string): Promise<Manga> {
        return this.apiService.get("/mangaupdates/findId/" + id).toPromise().then(res => {
            let manga = new Manga();

            manga.alternativeTitles = res.manga.associatedNames;
            manga.artist = res.manga.artist;
            manga.author = res.manga.author;
            manga.categories = res.manga.categories;
            manga.genres = res.manga.genres;
            manga.coverUrl = res.manga.imgUrl;
            manga.isCompleted = res.manga.scanlated;
            manga.synopsis = res.manga.synopsis;
            manga.title = res.manga.title;
            manga.type = res.manga.type;

            return manga;
        });
    }

    getMangaIdsMatchingSearch(searchterm: string): Promise<any> {
        return this.apiService.get("/mangaupdates/search/" + searchterm).toPromise();
    }
}