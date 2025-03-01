import express from 'express';
import auth from '../middleware/auth.js';
import Gallery from '../models/Gallery.js';

const router = express.Router();

// Get all gallery items for a user
router.get('/', auth, async (req, res) => {
  try {
    const galleries = await Gallery.find({ userId: req.user._id }).sort({ date: -1 });
    res.json(galleries);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Add a new gallery item
router.post('/', auth, async (req, res) => {
  try {
    const { title, description, image, tags } = req.body;

    const gallery = new Gallery({
      userId: req.user._id,
      title,
      description,
      image,
      tags: tags || []
    });

    await gallery.save();
    res.status(201).json(gallery);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Update a gallery item
router.put('/:id', auth, async (req, res) => {
  try {
    const { title, description, image, tags } = req.body;
    const gallery = await Gallery.findOne({ _id: req.params.id, userId: req.user._id });

    if (!gallery) {
      return res.status(404).json({ message: 'Gallery item not found' });
    }

    gallery.title = title || gallery.title;
    gallery.description = description || gallery.description;
    gallery.image = image || gallery.image;
    gallery.tags = tags || gallery.tags;

    await gallery.save();
    res.json(gallery);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Delete a gallery item
router.delete('/:id', auth, async (req, res) => {
  try {
    const gallery = await Gallery.findOneAndDelete({ _id: req.params.id, userId: req.user._id });
    
    if (!gallery) {
      return res.status(404).json({ message: 'Gallery item not found' });
    }

    res.json({ message: 'Gallery item deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

export default router;