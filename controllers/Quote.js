const {Quote} = require('../models');


class Controller {
  static async getAllQuote(req, res){
    try {
      const quotes = await Quote.findAll();
      res.status(200).json({quotes});
    } catch (err) {
      res.status(500).json({message: 'Internal Server Error'})
    }
  }

  static async getOneQuote(req, res) {
    const id = req.params.id;
    try {
      const quote = await Quote.findOne({where: {id}});
      if(!quote){
        res.status(404).json({message: 'Quote not found'});
      } else {
        res.status(200).json({quote});
      }
    } catch (err) {
      res.status(500).json({message: 'Internal Server Error'});
    }
  }

  static async updateQuote(req, res) {
    const id = req.params.id;
    const payload = {
      quote: req.body.quote,
      quotee: req.body.quotee,
      CategoryId: req.body.category
    }
    try {
      const updated = await Quote.update(payload, {where: {id}, individualHooks: true});
      if(!updated[0]){
        res.status(404).json({message: `Quote with id: ${id} not found`});
      } else {
        res.status(200).json({quote: updated[1][0]});
      }
    } catch (err) {
      res.status(500).json({message: 'Internal Server Error'})
    }
  }


  static async newQuote(req, res) {
    const payload = {
      quote: req.body.quote,
      quotee: req.body.quotee,
      CategoryId: req.body.category
    }
    try {
      const newQuote = await Quote.create(payload);
      res.status(201).json({newQuote});
    } catch(err) {
      if(err.errors.length) {
        res.status(401).json({error: err.errors})
      } else {
        res.status(500).json({message: 'Internal Server Error'})
      }
    }
  }

  static async deleteQuote(req, res) {
    const id = req.params.id;
    try {
      const deleted = await Quote.destroy({where: {id}});
      if(deleted){
        res.status(200).json({message: `Quote with id: ${id}, deleted`});
      } else {
        res.status(404).json({message: `Quote with id: ${id}, not found`});
      }
    } catch (err) {
      res.status(500).json({message: 'Internal Server Error'});
    }
  }
}

module.exports = Controller;