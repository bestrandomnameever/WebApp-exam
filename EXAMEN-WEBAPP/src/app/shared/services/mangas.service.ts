import { DummyRepo } from 'app/DummyRepo';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

import 'rxjs/add/operator/toPromise';

import { Manga } from '../';

@Injectable()
export class MangaService {

    mangas = new DummyRepo().MANGAS;

    constructor(
        private apiService: ApiService
    ) {}

    addManga(manga: Manga): Promise<Object> {
        console.log(manga.toJSON());
         return this.apiService.post('/mangas', {
             "manga": manga.toJSON()
         }).toPromise();
    }

    getAllMangas(from: number = 0, to: number = 100): Promise<any[]> {
        return Promise.resolve(this.mangas.slice(from, to));
    }
}