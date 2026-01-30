const express = require("express");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 3000;
const API_KEY = process.env.WEATHER_API_KEY;

app.get("/", (req, res) => {
  res.send("🌤️ Weather App is running!");
});

app.get("/weather/:city", async (req, res) => {
  const city = req.params.city;

  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await axios.get(url);

    res.json({
      city: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description
    });
  } catch (err) {
    res.status(500).json({ error: "City not found or API error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
