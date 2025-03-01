import mongoose from 'mongoose';

const calendarSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  title: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    enum: ['anniversary', 'date', 'special', 'other'],
    default: 'other'
  },
  isRecurring: {
    type: Boolean,
    default: false
  },
  reminderDate: {
    type: Date
  },
  color: {
    type: String,
    default: '#FF69B4' // Default to a pink color
  }
}, {
  timestamps: true
});

export default mongoose.model('Calendar', calendarSchema);