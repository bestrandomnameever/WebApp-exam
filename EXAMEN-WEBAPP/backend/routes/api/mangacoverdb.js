var router = require('express').Router();
var axios = require('axios');

router.get('/muId/:muId', function(req, res, next) {
    axios({
            method: 'get',
            baseURL: 'https://mcd.iosphe.re/api/v1',
            url: '/series/' + req.params.muId
        })
        .then(response => {
            const json = response.data
            const coverCollection = []
            /*const addedVolumes = []*/

            /*if (json.Covers.a) {
                json.Covers.a.forEach(el => {
                    if (el.Side === 'front') {
                        if (addedVolumes.indexOf(el.Volume) < 0) {
                            coverCollection.push({
                                volume: el.Volume,
                                covers: []
                            });
                        }
                        coverCollection.forEach(volume => {
                            if (volume.volume === el.Volume) {
                                volume.covers.push(el.Normal);
                            }
                        });
                    }
                });
            }*/

            if (json.Covers.a) {
                json.Covers.a.forEach(el => {
                    if (el.Side === 'front') {
                        coverCollection.push(el.Normal);
                    }
                });
            }

            res.json({
                covers: coverCollection
            });
        });
});

router.post('/search/:searchterm', function(req, res, next) {
    axios({
            method: 'post',
            baseURL: 'https://mcd.iosphe.re/api/v1',
            url: '/search/',
            data: {
                Title: req.params.searchterm
            }
        })
        .then(response => {
            const json = response.data
            res.json(json);
        })
});

module.exports = router;