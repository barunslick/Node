const express = require('express');

const config = require('../../config');
const logger = require('../../loader/logger');
const fileOperations = require('../../files/fileOperations');

const router = express.Router();

router.route('/:filename').get(function (req, res) {
  const fileName = req.params.filename;
  const filePath = `${config.baseUrl}/${fileName}`;

  const result = fileOperations.deleteFile(filePath);

  if (result) {
    logger.info(` Delete file ${fileName}`);
    res.json({
      message: 'OK',
    });
  } else {
    logger.info(` Delete file ${fileName} error.`);
    res.sendStatus(400);
  }
});

module.exports = router;
