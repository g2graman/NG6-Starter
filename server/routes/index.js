'use strict';

const fs = require('fs');
const bodyParser = require('body-parser');

module.exports = (app) => {
  app.use(bodyParser.json({ type: 'application/*+json' }));
  //app.get('/', (req, res) => {
  //  console.log(req.path);
  //});
};
