const express = require('express');
const app = express();

// Define route for the home page
app.get('/', (req, res) => {
  res.send('Welcome to ZenSpace! Our mindfulness and meditation app is designed to promote mental well-being with guided meditations, breathing exercises, and a serene interface.');
});

// Define route for the guided meditations page
app.get('/guided-meditations', (req, res) => {
  res.send('Choose from a variety of guided meditations that cater to your specific needs, including stress relief, focus improvement, and sleep aid.');
});

// Define route for the breathing exercises page
app.get('/breathing-exercises', (req, res) => {
  res.send('Practice breathing exercises that help you relax, reduce stress, and achieve a state of calm.');
});

// Define route for the mental well-being page
app.get('/mental-well-being', (req, res) => {
  res.send('Improve your mental well-being with our mindfulness and meditation app, and achieve a state of calm and relaxation.');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000.');
});