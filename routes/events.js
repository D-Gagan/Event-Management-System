// Import required modules
const express = require('express');
const router = express.Router();
const Event = require('../models/Event'); // Import the Event model

// POST route for adding new events
router.post('/', async (req, res) => {
  try {
    // Create a new event instance using the request body
    const newEvent = new Event(req.body);
    
    // Save the event to the database
    await newEvent.save();
    
    // Send a success response
    res.status(201).json({ message: 'Event created successfully', event: newEvent });
  } catch (error) {
    // Handle errors and send an error response
    console.error('Error creating event:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
