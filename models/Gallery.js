const mongoose = require("mongoose");

const gallerySchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    title: { type: String, required: true, trim: true },
    description: { type: String, trim: true },
    image: { type: String, required: true }, // Base64 encoded image
    date: { type: Date, default: Date.now },
    tags: [{ type: String, trim: true }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Gallery", gallerySchema);
