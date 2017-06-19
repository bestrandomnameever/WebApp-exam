var router = require('express').Router();
var mongoose = require('mongoose');

var Manga = mongoose.model('Manga');

router.get('/', function(req, res, next) {
    Manga.find().sort({title: 1}).then(function (mangas) {
        console.log(mangas);
        return res.json({mangas: mangas});
    }).catch(next);
});

router.post('/', function(req, res, next) {
    var manga = new Manga();

    manga.alternativeTitles = req.body.manga.alternativeTitles
    manga.artist = req.body.manga.artist;
    manga.author = req.body.manga.author;
    manga.categories = req.body.manga.categories;
    manga.coverUrl = req.body.manga.coverUrl;
    manga.genres = req.body.manga.genres;
    manga.isCompleted = req.body.manga.isCompleted;
    manga.synopsis = req.body.manga.synopsis;
    manga.title = req.body.manga.title;
    manga.type = req.body.manga.type;

    return manga.save().then(function() {
        return res.json({
            manga: manga.toJSON()
        });
    });
});

module.exports = router;