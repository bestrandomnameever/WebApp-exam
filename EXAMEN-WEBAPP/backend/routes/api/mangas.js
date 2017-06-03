var router = require('express').Router();
var mongoose = require('mongoose');

var Manga = mongoose.model('Manga');

router.get('/', function(req, res, next) {
    /*Article.find().distinct('tagList').then(function(tags) {
        return res.json({
            tags: tags
        });
    }).catch(next);*/
});

router.post('/', function(req, res, next) {
    var manga = new Manga();
    console.log(req.body);
    manga.title = req.body.manga.title;

    return manga.save().then(function() {
        console.log(manga.title);
        return res.json({
            manga: manga.toJSON
        });
    });
});

module.exports = router;