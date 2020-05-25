const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const shoeSchema = new Schema({
    brand: {type: String, required: true, trim: true},
    colorway: {type: String, required: true, trim: true},
    modelName: {type: String, required: true, trim: true},
    offerMax: {type: Number, required: true},
    offerMin: {type: Number, required: true},
    size: {type: Number, required: true},
    username: {type: String, required: true, trim: true},
  }, {
    timestamps: true,
});

const Shoe = mongoose.model('Shoe', shoeSchema);

module.exports = Shoe;

