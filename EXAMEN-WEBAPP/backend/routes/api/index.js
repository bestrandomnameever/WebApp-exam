var router = require('express').Router();

router.use('/mangas', require('./mangas'));
router.use('/meta', require('./metadata'));
router.use('/mangaupdates', require('./mangaupdates'));

module.exports = router;