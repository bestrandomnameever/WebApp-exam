var mongoose = require('mongoose');

var MangaSchema = new mongoose.Schema({
    alternativeTitles: [String],
    artist: String,
    author: String,
    categories: [String],
    coverUrl: String,
    genres: [String],
    isCompleted: Boolean,
    synopsis: String,
    title: String,
    type: String 
});

MangaSchema.methods.toJSON = function() {
    return {
        _id: this._id,

        alternativeTitles: this.alternativeTitles,
        artist: this.artist,
        author: this.author,
        categories: this.categories,
        coverUrl: this.coverUrl,
        genres: this.genres,
        isCompleted: this.isCompleted,
        synopsis: this.synopsis,
        title: this.title,
        type: this.type,
    };
};

mongoose.model('Manga', MangaSchema);