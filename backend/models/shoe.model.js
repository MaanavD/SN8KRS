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
    offerMin: Number,
    offerMax: Number,
    size: Number,
    name: String,
    tags: String
  }, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;

