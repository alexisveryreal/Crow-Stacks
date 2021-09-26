const { Router } = require('express');

const Pancakes = require('../models/PancakeEntries');

const router = Router();

router.get('/', async (req, res, next) => {
  try {
    const entries = await Pancakes.find({});
    res.json(entries);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const pancakeEntry = new Pancakes(req.body);
    const createdPancake = await pancakeEntry.save();
    res.json(createdPancake);
  } catch (error) {
    if (error.name === 'ValidationError') {
      res.status(422);
    }
    next(error);
  }
});

module.exports = router;
