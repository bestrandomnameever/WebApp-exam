import { Injectable } from '@angular/core';

import { ApiService } from './api.service';
import { Observable } from "rxjs/Observable";

@Injectable()
export class MetadataService {

    constructor(
        private apiService: ApiService
    ){}

    getAllAuthors(from: number = 0, to: number = 100): Promise<string[]>{
        return this.apiService.get('/meta/authors').toPromise().then(data => data.authors);
    }

    getAllArtists(from: number = 0, to: number = 100): Promise<string[]> {
        return this.apiService.get('/meta/artists').toPromise().then(data => data.artists);
    }

    getAllGenres(from: number = 0, to: number = 100): Promise<string[]> {
        return this.apiService.get('/meta/genres').toPromise().then(data => data.genres);
    }

    getAllCategories(from: number = 0, to: number = 100): Promise<string[]> {
        return this.apiService.get('/meta/categories').toPromise().then(data => data.categories);
    }
}