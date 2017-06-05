var router = require('express').Router();

router.use('/mangas', require('./mangas'));
router.use('/meta', require('./metadata'));

module.exports = router;