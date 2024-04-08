import fs from "fs";

const forecast = {
  day: "monday",
  temperature: 20,
  cloudy: true,
  sunny: false,
  windy: false,
};

const data = JSON.stringify(forecast, null, 2);

fs.writeFileSync("forecast_data.json", data, "utf8");