require('dotenv').config();
var bodyParser = require('body-parser');
const express = require('express');
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
	extended: true,
	limit: '50mb'
}));

// parse application/json
app.use(bodyParser.json({ limit: '50mb' }));

const user = require('./routes/user');

app.use('/api/v1', user);

module.exports = app;