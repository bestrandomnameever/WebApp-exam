var auth = require('../auth');
var mongoose = require('mongoose');
var router = require('express').Router();
var User = mongoose.model('User');

var Manga = mongoose.model('Manga');

router.param('manga', function (req, res, next, slug) {
    Manga.findOne({ slug: slug })
        .then(function (manga) {
            if (!manga) {
                return res.status(404).json({
                    errors: {
                        general: "Manga with slug '" + slug + "' not found"
                    }
                });
            }

            req.manga = manga;

            return next()
        }).catch(next);
});

router.param('searchterm', function (req, res, next, searchterm) {
    Manga.find({ $or: [{ title: { $regex: '.*' + searchterm + '.*', $options: '-i' } }, { alternativeTitles: { $regex: '.*' + searchterm + '.*', $options: '-i' } }] })
        .sort({ title: 1 })
        .then(function (mangas) {
            req.mangas = mangas;

            return next()
        }).catch(next);
});

//Get all manga
router.get('/', function (req, res, next) {
    Manga.find().sort({ title: 1 }).then(function (mangas) {
        return res.json({ mangas: mangas });
    }).catch(next);
});

//Get manga with slug
router.get('/:manga', function (req, res, next) {
    return res.json({
        manga: req.manga.toJSON()
    });
});

//Search for manga which term contain in name
router.get('/search/:searchterm', function (req, res, next) {
    return res.json(req.mangas.map(manga => manga.toJSON()));
})

//Add a manga
router.post('/', auth.required, auth.isAdmin, function (req, res, next) {
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

    return manga.save().then(function () {
        return res.json({
            manga: manga.toJSON()
        });
    }).catch(next);
});

//Edit manga
router.put('/:manga', auth.required, auth.isAdmin, function (req, res, next) {
    User.findById(req.payload.id).then(function (user) {
        if (typeof req.body.manga.alternativeTitles !== 'undefined') {
            req.manga.alternativeTitles = req.body.manga.alternativeTitles;
        }

        if (typeof req.body.manga.artist !== 'undefined') {
            req.manga.artist = req.body.manga.artist;
        }

        if (typeof req.body.manga.author !== 'undefined') {
            req.manga.author = req.body.manga.author;
        }

        if (typeof req.body.manga.categories !== 'undefined') {
            req.manga.categories = req.body.manga.categories;
        }

        if (typeof req.body.manga.coverUrl !== 'undefined') {
            req.manga.coverUrl = req.body.manga.coverUrl;
        }

        if (typeof req.body.manga.genres !== 'undefined') {
            req.manga.genres = req.body.manga.genres;
        }

        if (typeof req.body.manga.isCompleted !== 'undefined') {
            req.manga.isCompleted = req.body.manga.isCompleted;
        }

        if (typeof req.body.manga.synopsis !== 'undefined') {
            req.manga.synopsis = req.body.manga.synopsis;
        }

        if (typeof req.body.manga.title !== 'undefined') {
            req.manga.title = req.body.manga.title;
        }

        if (typeof req.body.manga.type !== 'undefined') {
            req.manga.type = req.body.manga.type;
        }

        req.manga.save().then(function (manga) {
            return res.json({
                manga: manga.toJSON()
            });
        }).catch(next);
    });
});

router.delete('/:manga', auth.required, auth.isAdmin, function (req, res, next) {
    req.manga.remove().then(deletedManga => {
        res.json({
            succes: "Manga with slug " + req.manga.slug + " deleted",
            manga: deletedManga.toJSON()
        });
    });
});

module.exports = router;