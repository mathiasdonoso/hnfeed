const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const helmet = require('helmet');
const components = require('./components');
const database = require('./config/database');
const jobs = require('./jobs');

jobs.start();

const app = express();

app.set('view engine', 'pug');

app.use(express.static('public'));
app.use(helmet());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

database();

app.use('/', components.feeds.routes);


module.exports = app;
