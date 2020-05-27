const router = require('express').Router();
let Offer = require('../models/offer.model');

router.route('/').get((req, res) => {
    Offer.find()
      .then(offers => res.json(offers))
      .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {

    const buyerUsername = req.body.buyerUsername;
    const offerAmount = Number(req.body.offerAmount);
    const sellerUsername = req.body.sellerUsername;
    const shoeId = req.body.shoeId;

    const newOffer = new Offer({
        buyerUsername,
        offerAmount,
        sellerUsername,
        shoeId
    });
  
    newOffer.save()
      .then(() => res.json('Offer added!'))
      .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Offer.findById(req.params.id)
      .then(offer => res.json(offer))
      .catch(err => res.status(400).json('Error: ' + err));
});
  
router.route('/:id').delete((req, res) => {
    Offer.findByIdAndDelete(req.params.id)
      .then(() => res.json('Offer deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Offer.findById(req.params.id)
      .then(offer => {
  
        offer.buyerUsername = req.body.buyerUsername;
        offer.offerAmount = Number(req.body.offerAmount);
        offer.sellerUsername = req.body.sellerUsername;
        offer.shoeId = req.body.shoeId;
  
        offer.save()
          .then(() => res.json('Offer updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/shoe/:id').get((req, res) => {
    Offer.find({shoeId: req.params.id})
      .then(offer => res.json(offer))
      .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;

