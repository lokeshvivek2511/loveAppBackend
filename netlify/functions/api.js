const express = require("express");
const serverless = require("serverless-http");

const app = express();

// Middleware & Routes
app.use(express.json());
app.use("/api/auth", require("../routes/auth"));
app.use("/api/calendar", require("../routes/calendar"));
app.use("/api/gallery", require("../routes/gallery"));
app.use("/api/quotes", require("../routes/quotes"));

// Export as Netlify function
module.exports.handler = serverless(app);
