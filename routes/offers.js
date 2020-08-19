const router = require('express').Router()
let Offer = require('../models/offer.model')

// router.route('/').get((req, res) => {
//     Offer.find()
//       .then(offers => res.json(offers))
//       .catch(err => res.status(400).json('Error: ' + err));
// });

// Get One Route
router.get('/', async (req, res) => {
  try {
    const offers = await Offer.find()
    res.json(offers)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

router.post('/add', async (req, res) => {
  try {
    let buyerUsername = req.body.buyerUsername
    let offerAmount = Number(req.body.offerAmount)
    let shoeId = req.body.shoeId

    let newOffer = new Offer({
      buyerUsername,
      offerAmount,
      shoeId
    })

    await newOffer.save()
    res.json('Offer saved')
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// router.route('/add').post((req, res) => {

//     const buyerUsername = req.body.buyerUsername;
//     const offerAmount = Number(req.body.offerAmount);
//     const sellerUsername = req.body.sellerUsername;
//     const shoeId = req.body.shoeId;

//     const newOffer = new Offer({
//         buyerUsername,
//         offerAmount,
//         sellerUsername,
//         shoeId
//     });

//     newOffer.save()
//       .then(() => res.json('Offer added!'))
//       .catch(err => res.status(400).json('Error: ' + err));
// });

router.get('/:id', async (req, res) => {
  try {
    const offer = await Offer.findById(req.params.id)
    res.json(offer)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// router.route('/:id').get((req, res) => {
//     Offer.findById(req.params.id)
//       .then(offer => res.json(offer))
//       .catch(err => res.status(400).json('Error: ' + err));
// });

router.delete('/:id', async (req, res) => {
  try {
    await Offer.findByIdAndDelete(req.params.id)
    res.json('Offer deleted')
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// router.route('/:id').delete((req, res) => {
//     Offer.findByIdAndDelete(req.params.id)
//       .then(() => res.json('Offer deleted.'))
//       .catch(err => res.status(400).json('Error: ' + err));
// });

router.post('/update/:id', async (req, res) => {
  try {
    let offer = await Offer.findById(req.params.id)
    offer.buyerUsername = req.body.buyerUsername
    offer.offerAmount = Number(req.body.offerAmount)
    offer.shoeId = req.body.shoeId
    await offer.save()
    res.json('Offer updated')
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// router.route('/update/:id').post((req, res) => {
//     Offer.findById(req.params.id)
//       .then(offer => {

//         offer.buyerUsername = req.body.buyerUsername;
//         offer.offerAmount = Number(req.body.offerAmount);
//         offer.sellerUsername = req.body.sellerUsername;
//         offer.shoeId = req.body.shoeId;

//         offer.save()
//           .then(() => res.json('Offer updated!'))
//           .catch(err => res.status(400).json('Error: ' + err));
//       })
//       .catch(err => res.status(400).json('Error: ' + err));
// });

router.get('/shoe/:id', async (req, res) => {
  try {
    const offers = await Offer.find({ shoeId: req.params.id })
    res.json(offers)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// router.route('/shoe/:id').get((req, res) => {
//     Offer.find({shoeId: req.params.id})
//       .then(offer => res.json(offer))
//       .catch(err => res.status(400).json('Error: ' + err));
// });

module.exports = router
