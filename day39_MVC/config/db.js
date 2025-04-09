const mongoose = require('mongoose');
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/7thaprilmvc2025')
    console.log('MongoDB Connected');
  } catch (error) {
    console.log('MongoDB Connection Failed', error);
  }
};
module.exports = connectDB;