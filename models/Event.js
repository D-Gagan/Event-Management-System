// Import mongoose package
const mongoose = require('mongoose');

// Define the event schema
const eventSchema = new mongoose.Schema({
  eventName: {
    type: String,
    required: true
  },
  city_name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  time: {
    type: String, // Assuming time is stored as a string
    required: true
  },
  latitude: {
    type: Number, // Change type to Number for latitude
    required: true
  },
  longitude: {
    type: Number, // Change type to Number for longitude
    required: true
  },
  weather: {
    type: String,
    required: true
  },
  distance_km: {
    type: Number, // Change type to Number for distance_km
    required: true
  }
});


// Create a model for the event schema
const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
