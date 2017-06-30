import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";

import { ActivatedRoute, Router } from '@angular/router';

import {
	Manga,
	DialogsService,
	MangaUpdatesService,
	MangaService,
	MetadataService
} from 'app/shared';

@Component({
	selector: 'app-addmanga',
	templateUrl: './add-manga.component.html',
	styleUrls: [
		'./add-manga.component.scss',
		"./ng2-tag-input.custom-theme.scss"]
})
export class AddMangaComponent implements OnInit {

	muId: string = "";
	slug: string;

	authors: string[];
	artists: string[] = [];
	categories: string[];
	genres: string[];
	types: string[] = [];

	mangaForm: FormGroup;
	editType: String;

	constructor(
		private dialogsService: DialogsService,
		private fb: FormBuilder,
		private mangaUpdatesService: MangaUpdatesService,
		private mangaService: MangaService,
		private metadataService: MetadataService,
		private route: ActivatedRoute,
		private router: Router
	) {
		this.mangaForm = fb.group({
			'title': ['', Validators.required],
			'alternativeTitles': [''],
			'author': [''],
			'artist': [''],
			'coverUrl': [''],
			'type': [''],
			'isCompleted': [''],
			'synopsis': [''],
			'genres': [''],
			'categories': ['']
		});
	}

	ngOnInit() {
		this.metadataService.getAllAuthors().then(authors => this.authors = authors);
		this.metadataService.getAllArtists().then(artists => this.artists = artists);
		this.metadataService.getAllTypes().then(types => this.types = types);
		this.metadataService.getAllGenres().then(genres => this.genres = genres);
		this.metadataService.getAllCategories().then(categories => this.categories = categories);

		this.route.data.subscribe(data => {
			let editableManga = data.editableManga;
			if (editableManga) {
				this.mangaForm.setValue({
					alternativeTitles: editableManga.alternativeTitles,
					author: editableManga.author,
					artist: editableManga.artist,
					categories: editableManga.categories,
					coverUrl: editableManga.coverUrl,
					genres: editableManga.genres,
					isCompleted: editableManga.isCompleted,
					synopsis: editableManga.synopsis,
					title: editableManga.title,
					type: editableManga.type,
				});
				this.slug = data.editableManga.slug;
			}

			this.editType = data.type;
		});
	}

	isInAddMode(): boolean {
		return this.editType === "add";
	}

	transformLowerCasedCapitalized(item: string): string {
		return item.charAt(0).toUpperCase() + item.toLowerCase().slice(1);
	}

	openSelectCoverDialog() {
		this.dialogsService.openCoverPickerDialog(this.muId, this.mangaForm.controls['title'].value).then(res => {
			if (res) {
				this.mangaForm.patchValue({
					coverUrl: res
				});
			}
		})
	}

	openImportFromMuDialog() {
		this.dialogsService.openImportFromMangaUpdatesDialog().then(res => {
			let id = res;

			this.mangaUpdatesService.getMangaInfoFromId(id).then(mangaInfo => {
				let nullSafeMangaInfo = mangaInfo.toNullSafe()
				this.mangaForm.setValue({
					alternativeTitles: nullSafeMangaInfo.alternativeTitles,
					author: nullSafeMangaInfo.author,
					artist: nullSafeMangaInfo.artist,
					categories: nullSafeMangaInfo.categories,
					coverUrl: nullSafeMangaInfo.coverUrl,
					genres: nullSafeMangaInfo.genres,
					isCompleted: nullSafeMangaInfo.isCompleted,
					synopsis: nullSafeMangaInfo.synopsis,
					title: nullSafeMangaInfo.title,
					type: nullSafeMangaInfo.type,
				});

				this.muId = id;
			});
		});
	}

	formValuesToManga(): Manga {
		let manga = new Manga();
		let formValues = this.mangaForm.value;

		manga.alternativeTitles = formValues.alternativeTitles;
		manga.artist = formValues.artist;
		manga.author = formValues.author;
		manga.categories = formValues.categories;
		manga.coverUrl = formValues.coverUrl;
		manga.genres = formValues.genres;
		manga.isCompleted = formValues.isCompleted;
		manga.synopsis = formValues.synopsis;
		manga.title = formValues.title;
		manga.type = formValues.type;

		return manga;
	}

	submit() {
		let manga = this.formValuesToManga();

		if (this.isInAddMode()) {
			this.mangaService.addManga(manga).then(res => {
				console.log(res);
				this.router.navigateByUrl("/manga/" + res.slug);
			}).catch(err => {
				//console.log(err);
			});
		} else {
			manga.slug = this.slug;
			this.mangaService.editMangaWithSlug(manga).then(res => {
				//console.log(res);
				this.router.navigateByUrl("/manga/" + res.slug);
			}).catch(err => {
				//console.log(err);
			})
		}
	}

}
