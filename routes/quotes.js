import express from 'express';
import auth from '../middleware/auth.js';
import Quote from '../models/Quote.js';

const router = express.Router();

// Get all quotes for a user
router.get('/', auth, async (req, res) => {
  try {
    const quotes = await Quote.find({ userId: req.user._id }).sort({ date: -1 });
    res.json(quotes);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Add a new quote
router.post('/', auth, async (req, res) => {
  try {
    const { content, author, isFavorite } = req.body;

    const quote = new Quote({
      userId: req.user._id,
      content,
      author,
      isFavorite: isFavorite || false
    });

    await quote.save();
    res.status(201).json(quote);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Update a quote
router.put('/:id', auth, async (req, res) => {
  try {
    const { content, author, isFavorite } = req.body;
    const quote = await Quote.findOne({ _id: req.params.id, userId: req.user._id });

    if (!quote) {
      return res.status(404).json({ message: 'Quote not found' });
    }

    quote.content = content || quote.content;
    quote.author = author || quote.author;
    quote.isFavorite = isFavorite !== undefined ? isFavorite : quote.isFavorite;

    await quote.save();
    res.json(quote);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Delete a quote
router.delete('/:id', auth, async (req, res) => {
  try {
    const quote = await Quote.findOneAndDelete({ _id: req.params.id, userId: req.user._id });
    
    if (!quote) {
      return res.status(404).json({ message: 'Quote not found' });
    }

    res.json({ message: 'Quote deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

export default router;