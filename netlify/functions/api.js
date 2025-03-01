const express = require("express");
const serverless = require("serverless-http");

const path = require("path");

// Use __dirname to properly locate the routes
const authRoutes = require(path.join(__dirname, "../../routes/auth"));
const calendarRoutes = require(path.join(__dirname, "../../routes/calendar"));
const galleryRoutes = require(path.join(__dirname, "../../routes/gallery"));
const quoteRoutes = require(path.join(__dirname, "../../routes/quotes"));

// Use them in Express
app.use("/api/auth", authRoutes);
app.use("/api/calendar", calendarRoutes);
app.use("/api/gallery", galleryRoutes);
app.use("/api/quotes", quoteRoutes);

module.exports.handler = serverless(app);
