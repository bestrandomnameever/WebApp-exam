import { Component, OnInit } from '@angular/core';

import { MangaService } from 'app/shared';

@Component({
  selector: 'app-manga-cover-grid',
  templateUrl: './manga-cover-grid.component.html',
  styleUrls: ['./manga-cover-grid.component.scss']
})
export class MangaCoverGridComponent implements OnInit {

  mangas;

  constructor(private mangaService : MangaService) { }

  ngOnInit() {
    // this.mangas = new MangaDummyRepo().MANGAS;
    this.mangaService.getAllMangas().then(mangas => this.mangas = mangas);
    this.mangaService.getMangaWithSlug('ai-ren').then(manga => {
      console.log(manga);
    })
  }

  openDetail(manga) {
    console.log(manga.title);
  }

}
