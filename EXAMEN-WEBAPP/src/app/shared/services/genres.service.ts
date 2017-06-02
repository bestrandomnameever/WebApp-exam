import { Injectable } from '@angular/core';
import { DummyRepo } from 'app/DummyRepo';

@Injectable()
export class GenresService {
    genres: string[] = new DummyRepo().GENRES;

    getAllGenres(from: number = 0, to: number = 100) {
        return Promise.resolve(this.genres.slice(from,to));
    }
}