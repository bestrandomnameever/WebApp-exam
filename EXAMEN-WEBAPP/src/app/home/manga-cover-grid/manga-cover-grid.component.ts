import { Component, OnInit } from '@angular/core';

import { MangaService } from 'app/shared';

@Component({
  selector: 'app-manga-cover-grid',
  templateUrl: './manga-cover-grid.component.html',
  styleUrls: ['./manga-cover-grid.component.scss']
})
export class MangaCoverGridComponent implements OnInit {

  mangas;
  loading: boolean = true;

  constructor(private mangaService : MangaService) { }

  ngOnInit() {
    this.mangaService.getAllMangas().then(mangas => {
      this.mangas = mangas;
      this.loading = false;
    });
  }
}
