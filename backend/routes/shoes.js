const router = require('express').Router();
let Shoe = require('../models/shoe.model');

router.route('/').get((req, res) => {
    Shoe.find()
      .then(shoes => res.json(shoes))
      .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const colorway = req.body.colorway;
    const brand = req.body.brand;
    const modelName = req.body.modelName;
    const offerMax = Number(req.body.offerMax);
    const offerMin = Number(req.body.offerMin);
    const size = Number(req.body.size);
    const sellerUsername = req.body.sellerUsername;
  
    const newShoe = new Shoe({
      brand,
      colorway,
      modelName,
      offerMax, 
      offerMin, 
      size,
      sellerUsername
    });
  
    newShoe.save()
      .then(() => res.json('Shoe added!'))
      .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Shoe.findById(req.params.id)
    .then(shoe => res.json(shoe))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Shoe.findByIdAndDelete(req.params.id)
    .then(() => res.json('Shoe deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Shoe.findById(req.params.id)
    .then(shoe => {

      shoe.colorway = req.body.colorway;
      shoe.brand = req.body.brand;
      shoe.modelName = req.body.modelName;
      shoe.offerMax = Number(req.body.offerMin);
      shoe.offerMin = Number(req.body.offerMin);
      shoe.size = Number(req.body.size);
      shoe.sellerUsername = req.body.sellerUsername;

      shoe.save()
        .then(() => res.json('Shoe updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/user/:id').get((req, res) => {
  Shoe.find({sellerUsername: req.params.id})
    .then(shoe => res.json(shoe))
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;