const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const chatMessageSchema = new Schema({
  senderUsername: {
    type: String,
    required: true,
    unique: false,
    trim: true,
    minlength: 3
  },
  receiverUsername: {
    type: String,
    required: true,
    unique: false,
    trim: true,
    minlength: 3
  },
  message: {
    type: String,
    required: true,
    unique: false,
    trim: false,
  },
}, {
  timestamps: true,
});

const ChatMessage = mongoose.model('ChatMessage', chatMessageSchema);

module.exports = ChatMessage;