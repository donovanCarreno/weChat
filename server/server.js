const express = require('express');

let app = express();

app.use(express.static(__dirname + '/../client/public'));

module.exports = app;
