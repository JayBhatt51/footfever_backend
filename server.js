const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require('cors');
require('dotenv').config();

app.use(express.json());
app.use(cors())
app.get('/', async (req, res) => {
  const url = 'https://football-live-stream-api.p.rapidapi.com/index.php';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
      'X-RapidAPI-Host': 'football-live-stream-api.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching match data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
