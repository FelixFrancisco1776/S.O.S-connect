const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

// Change to make it checklist model 
const checkItemSchema = new Schema({
  text: {
    type: String,
    required: 'You need to leave a text!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  isCheck: {
    type: Boolean,
    default: false,
  },
});
// change the name of the model

const CheckItem = model('CheckItem', checkItemSchema);

module.exports = CheckItem;
