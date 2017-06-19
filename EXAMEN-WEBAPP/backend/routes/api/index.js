var router = require('express').Router();

router.use('/mangas', require('./mangas'));
router.use('/meta', require('./metadata'));
router.use('/mangaupdates', require('./mangaupdates'));
router.use('/mangacoverdb', require('./mangacoverdb'));

router.use(function(err, req, res, next){
  if(err.name === 'ValidationError'){
    return res.status(422).json({
      errors: Object.keys(err.errors).reduce(function(errors, key){
        errors[key] = err.errors[key].message;

        return errors;
      }, {})
    });
  }

  return next(err);
});

module.exports = router;