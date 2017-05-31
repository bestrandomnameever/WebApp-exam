import { Component, OnInit } from '@angular/core';

import { MangaDummyRepo } from "app/MangasDummyRepo";

@Component({
  selector: 'app-manga-cover-grid',
  templateUrl: './manga-cover-grid.component.html',
  styleUrls: ['./manga-cover-grid.component.scss']
})
export class MangaCoverGridComponent implements OnInit {

  mangas;

  constructor() { }

  ngOnInit() {
    this.mangas = new MangaDummyRepo().MANGAS;
  }

  openDetail(manga) {
    console.log(manga.title);
  }

}
