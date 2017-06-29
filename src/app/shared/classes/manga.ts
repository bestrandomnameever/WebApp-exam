export class Manga {
    slug: string;

    alternativeTitles: string[];
    artist: string;
    author: string;
    categories: string[];
    coverUrl: string;
    genres: string[];
    isCompleted: boolean;
    synopsis: string;
    title: string;
    type: string;

    /**
     * Return the JSON equivalent of the object (for HTTP)
     */
    public toJSON(): Object {
        return {
            "alternativeTitles": this.alternativeTitles,
            "artist": this.artist,
            "author": this.author,
            "categories": this.categories,
            "coverUrl": this.coverUrl,
            "genres": this.genres,
            "isCompleted": this.isCompleted,
            "synopsis": this.synopsis,
            "title": this.title,
            "type": this.type
        }
    }

    public toNullSafe(): Manga {
        let manga = this;

        manga.alternativeTitles = manga.alternativeTitles ? manga.alternativeTitles : [];
        manga.artist = manga.artist ? manga.artist : "";
        manga.author = manga.author ? manga.author : "";
        manga.categories = manga.categories ? manga.categories : [];
        manga.coverUrl = manga.coverUrl ? manga.coverUrl : "";
        manga.genres = manga.genres ? manga.genres : [];
        manga.isCompleted = manga.isCompleted ? manga.isCompleted : false;
        manga.slug = manga.slug ? manga.slug : "";
        manga.synopsis = manga.synopsis ? manga.synopsis : "";
        manga.title = manga.title ? manga.title : "";
        manga.type = manga.type ? manga.type : "";

        return manga;
    }
}