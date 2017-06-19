import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'manga-detail',
    templateUrl: './manga-detail.component.html',
    styleUrls: ['./manga-detail.component.scss']
})
export class MangaDetailComponent implements OnInit {
    slug = "mayo-chiki";
    alternativeTitles = ["Mayo Chiki", "火影忍者", "～グッドエンディング～", "Наруто"];
    artist = "Niito";
    author = "ASANO Hajime";
    categories = [
        "Adapted to Anime",
        "Based on a Novel",
        "Butler/s",
        "Cross-dressing",
        "Fan Club",
        "Phobia/s",
        "Rich Female Lead",
        "Sadist/s",
        "Secret Identity",
        "Strong Female Lead"
    ];
    coverUrl = "https://mcd.iosphe.re/n/52913/1/front/a/";
    genres = [
        "Comedy",
        "Romance",
        "Seinen"
    ];
    isCompleted = true;
    synopsis = "Konoe Subaru, a classmate of Sakamachi Kinjirou, \n            has been serving as the butler of Suzutsuki Kanade in school. \n            Due to an accident, Sakamachi discovers Konoe's secret...that he \n            is actually a she!? Apparently she will be removed from her position \n            if anyone at school finds out. What will unfold from this chain of events?";
    title = "Mayo Chiki";
    type = "Manga";

    constructor() { }

    ngOnInit() { }
}