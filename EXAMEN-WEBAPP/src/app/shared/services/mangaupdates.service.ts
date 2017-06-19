import { Injectable } from '@angular/core';
import { ApiService } from "./api.service";

@Injectable()
export class MangaUpdatesService {

    constructor(
        private apiService: ApiService
    ){}

    getMangaInfoFromId(id: string): Promise<any> {
        return this.apiService.get("/mangaupdates/findId/" + id).toPromise().then(res => {
            return res.manga
        });
    }

    getMangaIdsMatchingSearch(searchterm: string): Promise<any> {
        return this.apiService.get("/mangaupdates/search/" + searchterm).toPromise();
    }
}