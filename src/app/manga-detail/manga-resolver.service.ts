import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";

import { Manga } from "app/shared";

import { MangaService } from './../shared/services/mangas.service';

@Injectable()
export class MangaResolver implements Resolve<Manga> {

    constructor(
        private mangaService: MangaService,
        private router: Router
    ) {}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot)
        : Promise<Manga> {
            return this.mangaService.getMangaWithSlug(route.params['slug'])
            .catch(err => {
                this.router.navigateByUrl('/')
            });
    }
}