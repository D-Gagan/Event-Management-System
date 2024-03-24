// Import mongoose package
const mongoose = require('mongoose');

// event schema
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
    type: String,
    required: true
  },
  latitude: {
    type: Number, 
    required: true
  },
  longitude: {
    type: Number, 
    required: true
  },
  weather: {
    type: String,
    required: true
  },
  distance_km: {
    type: Number, 
    required: true
  }
});


// Create a model for the event schema
const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
