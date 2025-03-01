import mongoose from 'mongoose';

const gallerySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String, 
    trim: true
  },
  image: {
    type: String,  // Will store base64 encoded image data
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  tags: [{
    type: String,
    trim: true
  }]
});

const Gallery = mongoose.model('Gallery', gallerySchema);

export default Gallery;