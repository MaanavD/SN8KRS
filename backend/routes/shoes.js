const router = require('express').Router();
let Shoe = require('../models/shoe.model');

router.route('/').get((req, res) => {
    Shoe.find()
      .then(shoes => res.json(shoes))
      .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const offerMax = req.body.offerMin;
    const offerMin = req.body.offerMin;
    const size = req.body.size;
  
    const newShoe = new Shoe({name, offerMax, offerMin, size});
  
    newShoe.save()
      .then(() => res.json('Shoe added!'))
      .catch(err => res.status(400).json('Error: ' + err));
});

  module.exports = router;