import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import galleryRoutes from './routes/gallery.js';
import quotesRoutes from './routes/quotes.js';
import calendarRoutes from './routes/calendar.js';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Middleware
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/gallery', galleryRoutes);
app.use('/api/quotes', quotesRoutes);
app.use('/api/calendar', calendarRoutes);

// For production with Netlify
if (process.env.NODE_ENV === 'production') {
  const buildPath = join(__dirname, '../project/dist');
  app.use(express.static(buildPath));
  
  app.get('*', (req, res) => {
    res.sendFile(join(buildPath, 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});