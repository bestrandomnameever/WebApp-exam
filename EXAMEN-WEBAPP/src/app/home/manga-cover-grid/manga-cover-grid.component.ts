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

  constructor(
    private mangaService: MangaService,
    private searchService: SearchService
  ) { }

  ngOnInit() {
    this.mangaService.getAllMangas().then(mangas => {
      this.mangas = mangas;
      this.loading = false;
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
}
