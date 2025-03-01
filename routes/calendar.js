const express = require("express");
const auth = require("../middleware/auth");
const Calendar = require("../models/Calendar");

const router = express.Router();

router.get("/", auth, async (req, res) => {
  try {
    const events = await Calendar.find({ userId: req.user._id }).sort({ date: 1 });
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

module.exports = router;
