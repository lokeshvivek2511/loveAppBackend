const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

// MongoDB Connection (Ensure MONGODB_URI is set in Netlify Environment Variables)
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("MongoDB connection error:", error));

// Import routes
const authRoutes = require("../../routes/auth");
const calendarRoutes = require("../../routes/calendar");
const galleryRoutes = require("../../routes/gallery");
const quoteRoutes = require("../../routes/quotes");

// Use routes
app.use("/api/auth", authRoutes);
app.use("/api/calendar", calendarRoutes);
app.use("/api/gallery", galleryRoutes);
app.use("/api/quotes", quoteRoutes);

// Export for Netlify Functions
module.exports.handler = serverless(app);
