var router = require('express').Router();
var cheerio = require('cheerio');
var axios = require('axios');

/*router.param('id', function(req, res, next, id) {

})*/

router.get('/:id', function(req, res, next) {
    axios({
            method: 'get',
            baseURL: 'https://www.mangaupdates.com',
            url: '/series.html',
            params: {
                id: req.params.id
            }
        })
        .then(function(response) {
            var html = response.data;
            const $ = cheerio.load(html);

            const title = $('.releasestitle').text();
            const imgUrl = findsContentWithsCat($, 'Image').find('img').attr('src');
            const synopsis = findsContentWithsCat($, 'Description').text().replace(/\n$/, "");
            const type = findsContentWithsCat($, 'Type').text().replace(/\n$/, "");
            const scanlated = findsContentWithsCat($, 'Completely Scanlated?').text().replace(/\n$/, "") === 'Yes';

            const associatedNames = [];
            $(findsContentWithsCat($, 'Associated Names')).html().split('<br>').forEach(el => {
                associatedNames.push($('<span>' + el + '</span>').text());
            })
            associatedNames.pop();

            const genres = []
            $(findsContentWithsCat($, 'Genre')).children('a').each(function (i, el) {
                genres.push($(el).text());
            });
            genres.pop();

            const categories = []
            $(findsContentWithsCat($, 'Categories')).find('li').each(function (i, el) {
                categories.push($(el).text());
            });


            return res.json({
                manga: {
                    title: title,
                    associatedNames: associatedNames,
                    imgUrl: imgUrl,
                    synopsis: synopsis,
                    type: type,
                    scanlated: scanlated,

                    genres: genres,
                    categories: categories
                }
            });
        }).catch(function(error) {
            console.log(error);
        })
});

function findsContentWithsCat($, section) {
    return $('.sCat').filter(function(i, el) {
        return $(el).text().toLowerCase().includes(section.toLowerCase());
    }).next();
}


module.exports = router;