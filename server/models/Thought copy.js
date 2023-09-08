const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

// Change to make it checklist model 
const thoughtSchema = new Schema({
  Text: {
    type: String,
    required: 'You need to leave a thought!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  UserId: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  IsCheck: {
    type: Boolean,
    default: false,
  },
  
});
// change the name of the model

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
