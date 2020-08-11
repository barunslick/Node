const express = require('express');

const router = express.Router();

router.route('/home').get(function (req, res) {
  res.json({
    message: 'OK',
  });
});

router.use('/read', require('./routes/read'));
router.use('/write', require('./routes/write'));
router.use('/rename', require('./routes/rename'));
router.use('/delete', require('./routes/delete'));

module.exports = router;
