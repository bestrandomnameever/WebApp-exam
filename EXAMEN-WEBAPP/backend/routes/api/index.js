var router = require('express').Router();

router.use('/mangas', require('./mangas'));
router.use('/meta', require('./metadata'));
router.use('/mangaupdates', require('./mangaupdates'));
router.use('/mangacoverdb', require('./mangacoverdb'));

module.exports = router;