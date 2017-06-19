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
}