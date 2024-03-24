// Import mongoose package
const mongoose = require('mongoose');

// Load environment variables from .env file
require('dotenv').config();

// MongoDB connection string
const dbURI = process.env.DB_URI;

// Connect to MongoDB database
/*mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
*/
mongoose.connect(dbURI);

// Get the default connection
const db = mongoose.connection;

// Event handlers for MongoDB connection events
db.on('connected', () => {
  console.log('Connected to MongoDB');
});

db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

db.on('disconnected', () => {
  console.log('Disconnected from MongoDB');
});

// Close MongoDB connection when Node.js process terminates
process.on('SIGINT', () => {
  db.close(() => {
    console.log('MongoDB connection closed');
    process.exit(0);
  });
});
