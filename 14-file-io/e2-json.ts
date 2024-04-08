import fs from "fs";

interface Forecast {
    day: string;
    temperature: number;
    cloudy: boolean;
    sunny: boolean;
    windy: boolean;
}

const forecast: Forecast = {
  day: "monday",
  temperature: 20,
  cloudy: true,
  sunny: false,
  windy: false,
};

const forecastToJSON = JSON.stringify(forecast, null, 2);
fs.writeFileSync("forecast_data.json", forecastToJSON, "utf8");

const data = fs.readFileSync("forecast_data.json", "utf8");
const newForecast: Forecast = JSON.parse(data);
newForecast.temperature = 30;
const newForecastToJSON = JSON.stringify(newForecast, null, 2);
fs.writeFileSync("forecast_data.json", newForecastToJSON, "utf8");
 
