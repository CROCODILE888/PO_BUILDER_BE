const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const cors = require('cors');
require('dotenv').config();

const app = express();
// connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const API_BASE = '/api/po-builder'
app.use(`${API_BASE}/auth`, authRoutes);

// Start the server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
