import mongoose from 'mongoose';

const quoteSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  content: {
    type: String,
    required: true,
    trim: true
  },
  author: {
    type: String,
    trim: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  isFavorite: {
    type: Boolean,
    default: false
  }
});

const Quote = mongoose.model('Quote', quoteSchema);

export default Quote;