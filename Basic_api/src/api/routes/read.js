const express = require('express');

const config = require('../../config');
const logger = require('../../loader/logger');
const fileOperations = require('../../files/fileOperations');

const router = express.Router();

router.route('/:filename').get(function (req, res) {
  const fileName = req.params.filename;
  const pathToFile = `${config.baseUrl}/${fileName}`;

  fileOperations
    .readFile(pathToFile)
    .then(function (data) {
      logger.info(` Read file ${fileName}: OK`);
      res.json({
        message: 'OK',
        contents: data,
      });
    })
    .catch(function (error) {
      logger.error(` Read ${fileName}: error: ${error}`);
      res.sendStatus(400);
    });
});

module.exports = router;
