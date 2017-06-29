var router = require('express').Router();
var mongoose = require('mongoose');

var Manga = mongoose.model('Manga');

router.get('/authors', function(req, res, next) {
    Manga.find().distinct('author').lean().exec((function(err, docs) {
        return res.json({
            authors: docs.sort()
        });
    }));
});

router.get('/artists', function(req, res, next) {
    Manga.find().distinct('artist').lean().exec((function(err, docs) {
        return res.json({
            artists: docs.sort()
        });
    }));
});

router.get('/genres', function(req, res, next) {
    Manga.find().distinct('genres').lean().exec((function(err, docs) {
        return res.json({
            genres: docs.sort()
        });
    }));
});

router.get('/categories', function(req, res, next) {
    Manga.find().distinct('categories').lean().exec((function(err, docs) {
        return res.json({
            categories: docs.sort()
        });
    }));
});

module.exports = router;