const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

const authRoutes = require("./routes/auth");
const galleryRoutes = require("./routes/gallery");
const quotesRoutes = require("./routes/quotes");
const calendarRoutes = require("./routes/calendar");

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ CORS Setup
const allowedOrigins = ["https://mylovestory.netlify.app"];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

// ✅ Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((error) => console.error("❌ MongoDB connection error:", error));

// ✅ API Routes
app.use("/api/auth", authRoutes);
app.use("/api/gallery", galleryRoutes);
app.use("/api/quotes", quotesRoutes);
app.use("/api/calendar", calendarRoutes);

// ✅ Handle Frontend for Production
if (process.env.NODE_ENV === "production") {
  const buildPath = path.join(__dirname, "../project/dist");
  app.use(express.static(buildPath));

  app.get("*", (req, res) => {
    res.sendFile(path.join(buildPath, "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
