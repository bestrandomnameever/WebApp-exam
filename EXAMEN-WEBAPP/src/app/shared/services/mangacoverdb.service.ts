import { Injectable } from '@angular/core';
import { ApiService } from "./api.service";

@Injectable()
export class MangaCoversDBService {

    constructor(
        private apiService: ApiService
    ){}
    
    getCoversFromuID(id: string): Promise<string[]> {
        return this.apiService.get('/mangacoverdb/muId/' + id).toPromise().then(res => res.covers);
    }
}