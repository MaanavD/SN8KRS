const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const messageSchema = new Schema({
    room: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
    }, 
    senderName: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
    },
    message: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
    },  
}, {
    timestamps: true,
  });

const message = mongoose.model('message', messageSchema);

module.exports = message;