/* const express = require('express'); */
const routes = require('../api');

/**
 * Prechecks the incoming requests.
 *
 * @param {express.Application} app
 */
function loadExpress(app) {
  app.get('/status', (req, res) => {
    res.status(200).end('Done');
  });

  app.use('/', routes);
}

module.exports = loadExpress;
