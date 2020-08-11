const express = require('express');

const config = require('../../config');
const logger = require('../../loader/logger');
const fileOperations = require('../../files/fileOperations');

const router = express.Router();

router.route('/:oldfile/:newfile').get(function (req, res) {
  const oldFileName = req.params.oldfile;
  const newFileName = req.params.newfile;

  const oldFilePath = `${config.baseUrl}/${oldFileName}`;
  const newFilePath = `${config.baseUrl}/${newFileName}`;

  fileOperations
    .renameFile(oldFilePath, newFilePath)
    .then(function () {
      logger.info(` Rename oldfile: ${oldFilePath} to newFile:${newFilePath}`);
      res.json({
        message: 'OK',
        newFile: newFileName,
      });
    })
    .catch(function (error) {
      logger.error(
        ` Rename oldfile: ${oldFilePath} to newFile:${newFilePath}:  error: ${error}`
      );
      res.sendStatus(400);
    });
});

module.exports = router;
