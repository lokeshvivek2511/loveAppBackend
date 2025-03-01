import express from 'express';
import auth from '../middleware/auth.js';
import Calendar from '../models/Calendar.js';

const router = express.Router();

// Get all calendar events for a user
router.get('/', auth, async (req, res) => {
  try {
    const events = await Calendar.find({ userId: req.user._id }).sort({ date: 1 });
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Add a new calendar event
router.post('/', auth, async (req, res) => {
  try {
    const { title, date, description, type, isRecurring, reminderDate, color } = req.body;

    const event = new Calendar({
      userId: req.user._id,
      title,
      date,
      description,
      type,
      isRecurring,
      reminderDate,
      color
    });

    await event.save();
    res.status(201).json(event);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Update a calendar event
router.put('/:id', auth, async (req, res) => {
  try {
    const { title, date, description, type, isRecurring, reminderDate, color } = req.body;
    const event = await Calendar.findOne({ _id: req.params.id, userId: req.user._id });

    if (!event) {
      return res.status(404).json({ message: 'Calendar event not found' });
    }

    event.title = title || event.title;
    event.date = date || event.date;
    event.description = description || event.description;
    event.type = type || event.type;
    event.isRecurring = isRecurring !== undefined ? isRecurring : event.isRecurring;
    event.reminderDate = reminderDate || event.reminderDate;
    event.color = color || event.color;

    await event.save();
    res.json(event);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Delete a calendar event
router.delete('/:id', auth, async (req, res) => {
  try {
    const event = await Calendar.findOneAndDelete({ _id: req.params.id, userId: req.user._id });
    
    if (!event) {
      return res.status(404).json({ message: 'Calendar event not found' });
    }

    res.json({ message: 'Calendar event deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

export default router;