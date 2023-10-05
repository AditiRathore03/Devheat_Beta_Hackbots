const express = require('express');
const router = express.Router();
const coder = require('../models/userip'); // Import your Mongoose model

// Route to handle the POST request from the frontend
router.post('/updateFilters', async (req, res) => {
  try {
    const selectedOptions = req.body.selectedOptions.split(',') // Spliting the string into an array
    
    // Update the MongoDB database based on the selected filter options
    // For example, you can perform a database query to filter and update documents
    const filteredcoder = await coder.find({ skills: { $in: selectedOptions } });
    console.log('Filtered Coder Data:', filteredcoder);

    // Send the filtered data back to the frontend or perform other actions as needed
    res.json(filteredcoder);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Backend route to display filtered data
router.get('/displayFilteredData', (req, res) => {
  // Render an HTML page with the filtered data
  res.render('filteredDataPage', { filteredcoder });
});


const app = express();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);` `
});

module.exports = router;
