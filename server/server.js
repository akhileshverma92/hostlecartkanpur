// server.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const loginRoutes = require('./routes/authRoutes');
const signupUser = require('./routes/authRoutes')

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api', loginRoutes);
app.use('/api', signupUser)
// Connect DB and start server
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected');
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(err => console.error(err));
