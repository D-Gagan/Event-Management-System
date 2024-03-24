const express = require('express');
const router = express.Router();
const Event = require('../models/Event');

router.get('/', async (req, res) => {
  try {
    const { latitude, longitude, date } = req.query;
    const startDate = new Date(date);
    const endDate = new Date(date);
    endDate.setDate(startDate.getDate() + 14);

    
    const lat = parseFloat(latitude);
    const lon = parseFloat(longitude);

    // events within the date range and near the specified location
    const events = await Event.find({
      date: { $gte: startDate, $lte: endDate },
      latitude: { $gte: lat - 0.5, $lte: lat + 0.5 }, 
      longitude: { $gte: lon - 0.5, $lte: lon + 0.5 } 
    }).sort('date');
    

    res.json({ events });
  } catch (error) {
    console.error('Error finding events:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


module.exports = router;
