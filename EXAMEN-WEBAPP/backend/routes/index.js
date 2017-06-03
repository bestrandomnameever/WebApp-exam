const express = require('express');
const router = express.Router();

/* GET api listing. */
/*router.get('/', (req, res) => {
  res.send('api works');
});*/
router.use('/api', require('./api'));

module.exports = router;