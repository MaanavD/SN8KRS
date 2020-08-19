const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const offerSchema = new Schema({
    buyerUsername: {type: String, required: true, trim: true},
    offerAmount: {type: Number, required: true},
    shoeId: {type: String, required: true, trim: true}
  }, {
    timestamps: true,
});

const Offer = mongoose.model('Offer', offerSchema);

module.exports = Offer;