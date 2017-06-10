import { Injectable } from '@angular/core';
import { ApiService } from "./api.service";

@Injectable()
export class MangaCoversDBService {

    constructor(
        private apiService: ApiService
    ){}
    
    searchMangaCoverDBWithTitle(searchterm: string): Promise<any> {
        return this.apiService.post('/mangacoverdb/search/', {
            "Title": searchterm
        }).toPromise()
    }
    
    getCoversFromuID(id: string): Promise<string[]> {
        return this.apiService.get('/mangacoverdb/muId/' + id).toPromise().then(res => res.covers);
    }
}