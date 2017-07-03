import { ActivatedRoute, Router, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { MangaService } from 'app/shared';
import { SearchService } from './../../shared/services/search.service';

@Component({
  selector: 'app-manga-cover-grid',
  templateUrl: './manga-cover-grid.component.html',
  styleUrls: ['./manga-cover-grid.component.scss']
})
export class MangaCoverGridComponent implements OnInit {

  mangas;
  loading: boolean = true;
  isHome: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private mangaService: MangaService,
    private router: Router,
    private searchService: SearchService
  ) { }

  ngOnInit() {

    this.route.url.subscribe(data => {
      if (data[data.length - 1].path === "home") {
        this.getAllMangas();
      } else {
        this.route.queryParams.subscribe(params => {
          this.getAllMangasWithParams(params);
        });
      }
    });

    this.searchService.searchResults.subscribe(searchTerm => {
      this.loading = true;
      if (searchTerm === "") {
        this.mangaService.getAllMangas().then(mangas => {
          this.mangas = mangas;
          this.loading = false;
        });
      } else {
        this.mangaService.getMangasMatching(searchTerm).then(mangas => {
          this.mangas = mangas;
          this.loading = false;
        });
      }
    });
  }

  private getAllMangas() {
    this.loading = true
    this.mangaService.getAllMangas().then(mangas => {
      this.mangas = mangas;
      this.loading = false;
    });
  }

  private getAllMangasWithParams(params: Params) {
    if (Object.keys(params).length === 0) {
      this.getAllMangas();
    } else {
      this.mangaService.getAllMangasWithParams(params).then(mangas => {
        console.log(mangas);
        this.mangas = mangas;
        this.loading = false;
      });
    }
  }
}
