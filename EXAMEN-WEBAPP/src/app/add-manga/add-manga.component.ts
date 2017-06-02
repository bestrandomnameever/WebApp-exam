import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-addmanga',
  templateUrl: './add-manga.component.html',
  styleUrls: [
    './add-manga.component.scss',
    "./ng2-tag-input.custom-theme.scss"]
})
export class AddMangaComponent implements OnInit {

  manga = {
    title: "Nisekoi",
    alternativeTitles: ["Nisekoi: False Love", "Nisekoi : Amours, mensonges et yakuzas", "니세코이", "รักลวงป่วนใจ", "伪恋", "ニセコイ"],
    coverUrl: "https://mcd.iosphe.re/r/62667/1/front/a/",
  }

  genres: string[] = [
    "romance",
    "tragedy",
    "comedy"
  ];
  selectedGenres: string[] = [];

  categories: string[] = [
    "10th Century",
    "4-koma",
    "Absent Parent/s",
    "Academy",
    "Accent Colors",
    "Accidental Death"
  ];
  selectedCategories: string[] = [];

  constructor() {
    this.genres = this.genres.map(item => this.transformLowerCasedCapitalized(item));
  }

  ngOnInit() {
  }

  transformLowerCasedCapitalized(item: string): string {
    return item.charAt(0).toUpperCase() + item.toLowerCase().slice(1);
  }

}
