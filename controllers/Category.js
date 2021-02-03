const {Category} = require('../models');


class Controller {
  static async getAllCategories(req, res) {
    try {
      const categories = await Category.findAll();
      res.status(200).json({categories});
    } catch (err) {
      res.status(500).json({message: 'Internal Server Error'})
    }
  }
  static async newCategories (req, res) {
    const payload = {
      name: req.body.name
    }
    try {
      const newCategory = await Category.create(payload);
      res.status(201).json({newCategory});
    } catch (err) {
      if(err.errors.length) {
        res.status(401).json({message: 'Category Name Required'})
      } else {
        res.status(500).json({message: 'Internal Server Error'})
      }
    }
  }
  static async deleteCategories (req, res) {
    const id = req.params.id;
    try {
      const deleted = await Category.destroy({where: {id}})
      if(deleted) {
        res.status(200).json({message: `Category with id: ${id}, has been deleted`})
      } else {
        res.status(404).json({message: `Category with id: ${id}, not found`})
      }
    } catch (err) {
      res.status(500).json({message: 'Internal Server Error'})
    }
  }
}

module.exports = Controller;