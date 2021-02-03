const express = require('express');
const router = express.Router();
const categoryRoute = require('./category');
const quoteRoute = require('./quote');

router.get('/', (req, res) => {
  res.status(200).json({message: 'Deployed'})
})

router.use('/category', categoryRoute);
router.use('/quote', quoteRoute);

module.exports = router;