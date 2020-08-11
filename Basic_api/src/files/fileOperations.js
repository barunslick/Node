const fs = require('fs');

/**
 * Creates a new promise containing write file opeartion inside.
 *
 * @param {String} filePath
 * @param {String} contents Contents to be written in file.
 * @returns {Promise} Promise for writeFile operation.
 */
function writeToFile(filePath, contents) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, contents, function (err) {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

/**
 * Creates a new promise containing read file opeartion.
 *
 * @param {String} filePath
 * @returns {Promise} Promise for read file opeartion.
 */
function readFile(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

/**
 * Creates a new promise containing rename operation.
 *
 * @param {String} oldFilePath
 * @param {String} newFilePath
 * @returns {Promise} Promise for rename operation.
 */
function renameFile(oldFilePath, newFilePath) {
  return new Promise((resolve, reject) => {
    fs.rename(oldFilePath, newFilePath, function (error) {
      if (error) {
        reject(error);
      } else {
        resolve('Done');
      }
    });
  });
}

/**
 * Creates a new promise containing delete file operation.
 *
 * @param {String} filePath
 * @returns {Boolean} Boolean for success or failure of delete opeartion.
 */
function deleteFile(filePath) {
  try {
    fs.unlinkSync(filePath);

    return true;
  } catch (error) {
    return false;
  }
}

module.exports = {
  writeToFile,
  readFile,
  renameFile,
  deleteFile,
};
