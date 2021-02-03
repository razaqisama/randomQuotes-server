const express = require('express');
const route = express.Router();
const Controller = require('../controllers/Category');


route.get('/', Controller.getAllCategories);
route.post('/', Controller.newCategories);
route.delete('/:id', Controller.deleteCategories);
module.exports = route;