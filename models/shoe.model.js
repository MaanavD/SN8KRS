const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const shoeSchema = new Schema({
    size: {type: Number, required: true},
    gender: {type: String, required: true, trim: true},
    brand: {type: String, required: true, trim: true},
    modelName: {type: String, required: true, trim: true},
    colorway: {type: String, required: true, trim: true},
    offerMin: {type: Number, required: true},
    offerMax: {type: Number, required: true},
    sellerUsername: {type: String, required: true, trim: true},
    picture: {type: BinData, required: true, trim: true},
  }, {
    timestamps: true,
});

const Shoe = mongoose.model('Shoe', shoeSchema);

module.exports = Shoe;

