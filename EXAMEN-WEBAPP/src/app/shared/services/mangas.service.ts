import { DummyRepo } from 'app/DummyRepo';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class MangaService {

    mangas = new DummyRepo().MANGAS;

    getAllMangas(from: number = 0, to: number = 100): Promise<any[]> {
        return Promise.resolve(this.mangas.slice(from, to));
    }
}