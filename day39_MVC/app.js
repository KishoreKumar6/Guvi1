const express = require('express');
const connectDB = require('./config/db');
const studentRoutes = require('./routes/studentRoutes');

const app = express();
// Connect to MongoDB

connectDB();
// Middleware to parse JSON

app.use(express.json());

// Routes
app.use('/students', studentRoutes);


// Start server
app.listen(5004, () => {
  console.log('Server running on http://localhost:5004');
});