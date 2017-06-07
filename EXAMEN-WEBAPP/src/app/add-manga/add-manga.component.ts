import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from "@angular/forms";

import {
  DialogsService,
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

  muId: string = "62667";

  manga = {
    title: "Nisekoi",
    alternativeTitles: ["Nisekoi: False Love", "Nisekoi : Amours, mensonges et yakuzas", "니세코이", "รักลวงป่วนใจ", "伪恋", "ニセコイ"],
    coverUrl: "https://mcd.iosphe.re/r/62667/1/front/a/",
    synopsis: "On May 9th, 1999, Raku Ichijou was born into the Yakuza heir. On June 7th, 1999, Chitoge Kirisaki was born into the Bee Hive Gangsters. Even though Raku may be the next heir to a Yakuza group, he's actually a normal highschool student who wishes for peace and quiet. However, when he meets violent transfer student Chitoge Kirisaki, his life takes a sharp turn for the worse!",
    author: "KOMI Naoshi",
    artist: "KOMI Naoshi",
    genres: ["Comedy", "Drama", "Romance", "School Life", "Shounen"],
    categories: ["Childhood Friend/s", "Childhood Love", "Childhood Promise", "Family Rivals", "Gang/s", "Mafia", "Misunderstanding/s", "Pretend Lovers", "Promise/s", "Strong Female Lead"]
  }

  authors: string[];
  artists: string[] = [];
  genres: string[];
  categories: string[];

  constructor(
    private metadataService: MetadataService,
    private dialogsService: DialogsService
  ) { }

  ngOnInit() {
    this.metadataService.getAllAuthors().then(authors => this.authors = authors);
    this.metadataService.getAllArtists().then(artists => this.artists = artists);
    this.metadataService.getAllGenres().then(genres => this.genres = genres);
    this.metadataService.getAllCategories().then(categories => this.categories = categories);
  }

  transformLowerCasedCapitalized(item: string): string {
    return item.charAt(0).toUpperCase() + item.toLowerCase().slice(1);
  }


  submit() {
    console.log("Hier backend logica");
  }

  openSelectCoverDialog(){
    this.dialogsService.openCoverPickerDialog(this.muId).then(res => {
      this.manga.coverUrl = res;
    })
  }

}
