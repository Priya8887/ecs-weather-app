app.get("/weather/:city", async (req, res) => {
  const city = req.params.city;

  if (!city) {
    return res.status(400).json({
      success: false,
      message: "City name is required"
    });
  }

  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await axios.get(url);

    res.status(200).json({
      success: true,
      message: "Weather data fetched successfully 🌤️",
      data: {
        city: response.data.name,
        country: response.data.sys.country,
        temperature: `${response.data.main.temp} °C`,
        feels_like: `${response.data.main.feels_like} °C`,
        humidity: `${response.data.main.humidity} %`,
        weather: response.data.weather[0].main,
        description: response.data.weather[0].description,
        wind_speed: `${response.data.wind.speed} m/s`
      },
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    res.status(404).json({
      success: false,
      message: "City not found or weather service unavailable ❌",
      error: error.response?.data?.message || "Unknown error",
      timestamp: new Date().toISOString()
    });
  }
});
