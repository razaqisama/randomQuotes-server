const express = require('express');
const app = express();
const cors = require('cors');
const routers = require('./routers')

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use('/', routers);

module.exports = app;

