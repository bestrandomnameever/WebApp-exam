var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var slug = require('slug');

var MangaSchema = new mongoose.Schema({
    alternativeTitles: [String],
    artist: String,
    author: String,
    categories: [String],
    coverUrl: String,
    genres: [String],
    isCompleted: Boolean,
    slug: {type: String, lowercase: true, unique:true},
    synopsis: String,
    title: {type: String, required: true},
    type: String 
});

MangaSchema.plugin(uniqueValidator, {message: 'is already taken'});

MangaSchema.pre('validate', function (next) {
    this.slugify();

    next();
})

MangaSchema.methods.slugify = function () {
    this.slug = slug(this.title);
}

MangaSchema.methods.toJSON = function() {
    return {
        _id: this._id,
        slug: this.slug,

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