const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const shoeSchema = new Schema({
    // username: {
    //   type: String,
    //   required: true,
    //   unique: true,
    //   trim: true,
    //   minlength: 3
    // },
    name: {type: String, required: true},
    offerMax: {type: Number, required: true},
    offerMin: {type: Number, required: true},
    size: {type: Number, required: true},
  }, {
    timestamps: true,
});

const Shoe = mongoose.model('Shoe', shoeSchema);

module.exports = Shoe;

