const express = require('express');
const route = express.Router();
const Controller = require('../controllers/Quote');

route.get('/', Controller.getAllQuote);
route.get('/:id', Controller.getOneQuote);
route.post('/', Controller.newQuote);
route.delete('/:id', Controller.deleteQuote);
route.put('/:id', Controller.updateQuote);

module.exports = route;