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

router.post('/search/', function(req, res, next) {
    axios({
            method: 'post',
            baseURL: 'https://mcd.iosphe.re/api/v1',
            url: '/search/',
            data: {
                Title: req.body.Title
            }
        })
        .then(response => {
            console.log(response)
            const json = response.data.Results.map(el => {
                return {
                    id: el[0],
                    title: el[1]
                }
            });
            console.log(response.data);
            res.json(json);
        })
});

module.exports = router;