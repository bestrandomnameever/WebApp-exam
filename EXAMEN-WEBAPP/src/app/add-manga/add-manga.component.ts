import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from "@angular/forms";

import {
	Manga,
	DialogsService,
	MangaUpdatesService,
	MangaService,
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

	muId: string = "";

	manga = new Manga();

	/*manga = {
		alternativeTitles: [],
		author: "",
		artist: "",
		categories: [],
		coverUrl: "",
		genres: [],
		isCompleted: false,
		synopsis: "",
		title: "",
		type: ""
	}*/

	authors: string[];
	artists: string[] = [];
	categories: string[];
	genres: string[];
	types: string[] = [];
	
	constructor(
		private dialogsService: DialogsService,
		private mangaUpdatesService: MangaUpdatesService,
		private mangaService: MangaService,
		private metadataService: MetadataService,
	) { }

	ngOnInit() {
		this.metadataService.getAllAuthors().then(authors => this.authors = authors);
		this.metadataService.getAllArtists().then(artists => this.artists = artists);
		this.metadataService.getAllTypes().then(types => this.types = types);
		this.metadataService.getAllGenres().then(genres => this.genres = genres);
		this.metadataService.getAllCategories().then(categories => this.categories = categories);
	}

	transformLowerCasedCapitalized(item: string): string {
		return item.charAt(0).toUpperCase() + item.toLowerCase().slice(1);
	}

	openSelectCoverDialog() {
		this.dialogsService.openCoverPickerDialog(this.muId, this.manga.title).then(res => {
			if (res) {
				this.manga.coverUrl = res;
			}
		})
	}

	openImportFromMuDialog() {
		this.dialogsService.openImportFromMangaUpdatesDialog().then(res => {
			console.log(res);
			
			let id = res;

			this.mangaUpdatesService.getMangaInfoFromId(id).then(mangaInfo => {
				this.manga.title = mangaInfo.title;
				this.manga.alternativeTitles = mangaInfo.associatedNames;
				this.manga.coverUrl = mangaInfo.imgUrl;
				this.manga.synopsis = mangaInfo.synopsis;
				this.manga.author = mangaInfo.author;
				this.manga.artist = mangaInfo.artist;
				this.manga.genres = mangaInfo.genres;
				this.manga.categories = mangaInfo.categories;
				this.manga.isCompleted = mangaInfo.scanlated;
				this.manga.type = mangaInfo.type;

				this.muId = id;
			});
		});
	}

	test (event) {
		console.log(event);
	}

	submit() {
		this.mangaService.addManga(this.manga).then(res => {
			console.log(res);
		}).catch(err => {
			console.log(err);
		});
	}

}
