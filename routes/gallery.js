const express = require("express");
const auth = require("../middleware/auth");
const Gallery = require("../models/Gallery");

const router = express.Router();

router.get("/", auth, async (req, res) => {
  try {
    const galleries = await Gallery.find({ userId: req.user._id }).sort({ date: -1 });
    res.json(galleries);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

module.exports = router;
