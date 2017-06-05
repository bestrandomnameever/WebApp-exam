import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from "@angular/forms";
import {
  MetadataService
} from 'app/shared';

/*import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";*/

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

  authors: string[];
  selectedAuthor: String;

  artists: string[] = [];
  selectedArtist: string;

  genres: string[];
  selectedGenres: string[] = [];

  categories: string[];
  selectedCategories: string[] = [];

  constructor(
    private metadataService: MetadataService
  ) { }

  ngOnInit() {
    this.metadataService.getAllAuthors().then(authors => this.authors = authors);
    this.metadataService.getAllArtists().then(artists => this.artists = artists);
    this.metadataService.getAllGenres().then(genres => this.genres = genres);
    this.metadataService.getAllCategories().then(categories => {
      this.categories = categories
      console.log(categories);
    });
  }

  transformLowerCasedCapitalized(item: string): string {
    return item.charAt(0).toUpperCase() + item.toLowerCase().slice(1);
  }

}
