var mongoose = require('mongoose');

var MangaSchema = new mongoose.Schema({
    title: String,
    alternativeTitles: [String],
    coverUrl: String,
    synopsis: String,
    author: String,
    artist: String,
    type: String,
    genres: [String],
    categories: [String]
});

MangaSchema.methods.toJSON = function() {
    return {
        _id: this._id,
        title: this.title,
        alternativeTitles: this.alternativeTitles,
        coverUrl: this.coverUrl,
        synopsis: this.synopsis,
        author: this.author,
        artist: this.artist,
        type: this.type,
        genres: this.genres,
        categories: this.categories
    };
};

mongoose.model('Manga', MangaSchema);