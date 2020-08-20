const router = require("express").Router();
let Offer = require("../models/offer.model");

router.get("/", async (req, res) => {
  try {
    let offers = await Offer.find();
    res.json(offers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/add", async (req, res) => {
  try {
    let [buyerUsername, offerAmount, shoeId] = [
      req.body.buyerUsername,
      Number(req.body.offerAmount),
      req.body.shoeId,
    ];
    let newOffer = new Offer({
      buyerUsername,
      offerAmount,
      shoeId,
    });
    await newOffer.save();
    res.json("Offer saved");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    let offer = await Offer.findById(req.params.id);
    res.json(offer);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Offer.findByIdAndDelete(req.params.id);
    res.json("Offer deleted");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/update/:id", async (req, res) => {
  try {
    let offer = await Offer.findById(req.params.id);
    [offer.buyerUsername, offer.offerAmount, offer.shoeId] = [
      req.body.buyerUsername,
      Number(req.body.offerAmount),
      req.body.shoeId,
    ];
    await offer.save();
    res.json("Offer updated");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/shoe/:id", async (req, res) => {
  try {
    let offers = await Offer.find({ shoeId: req.params.id });
    res.json(offers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
