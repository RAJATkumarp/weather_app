import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function InfoBox({ info }) {
  const INIT_URL =
    "https://images.unsplash.com/photo-1641970304221-48dc92c14daf?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZHVzdCUyMHN0b3JtfGVufDB8fDB8fHww";
  const HOT_URL =
    "https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
  const COLD_URL =
    "https://images.unsplash.com/photo-1674407866481-a39b2239f771?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const RAIN_URL =
    "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmFpbnklMjB3ZWF0aGVyfGVufDB8fDB8fHww";

  // ✅ Decide which image to show
  let weatherImage = INIT_URL;
  if (info.weather.toLowerCase().includes("clouds")) {
    weatherImage = RAIN_URL;
  } else if (info.temp >= 30) {
    weatherImage = HOT_URL;
  } else if (info.temp <= 15) {
    weatherImage = COLD_URL;
  }

  return (
    <div className="infoBox">
      <h1>Weather Info - {info.weather}</h1>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={weatherImage}
          title="weather image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            <div>Temperature: {info.temp}°C</div>
            <div>Temperature Max: {info.tempMax}°C</div>
            <div>Temperature Min: {info.tempMin}°C</div>
            <div>Humidity: {info.humidity}%</div>
            <div>Feels Like: {info.feelslike}°C</div>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
