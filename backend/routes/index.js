const express = require('express');
const router = express.Router();

/* GET api listing. */
/*router.get('/', (req, res) => {
  res.send('api works');
});*/
router.use('/api', require('./api'));

//Error handler for missing or invalid JWT token
router.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({
      errors: {
        general: "JWT Token missing or incorrect"
      }
    });
  }
});

module.exports = router;