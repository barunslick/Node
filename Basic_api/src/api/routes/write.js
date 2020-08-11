const express = require('express');

const config = require('../../config');
const logger = require('../../loader/logger');
const fileOperations = require('../../files/fileOperations');

const router = express.Router();

router.route('/:filename/:contents').get(function (req, res) {
  const fileName = req.params.filename;
  const fileContent = req.params.contents;
  const pathToFile = `${config.baseUrl}/${fileName}`;

  fileOperations
    .writeToFile(pathToFile, fileContent)
    .then(function () {
      logger.info(` Write to file ${fileName}`);
      res.json({
        message: 'OK',
        fileName: fileName,
      });
    })
    .catch(function (error) {
      logger.error(` Write to file ${fileName}: error: ${error}`);
      res.sendStatus(400);
    });
});

module.exports = router;
