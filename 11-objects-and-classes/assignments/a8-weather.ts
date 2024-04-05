{
  class WeatherEvent {
    timestamp: Date;

    constructor(timestamp: Date) {
      this.timestamp = timestamp;
    }

    getInfo() {
      return "";
    }

    print() {
      console.log(`${this.timestamp.toLocaleString()} ${this.getInfo()}`);
    }
  }
  class TemperatureChangeEvent extends WeatherEvent {
    temperature: number;
    constructor(timestamp: Date, temperature: number) {
      super(timestamp);
      this.temperature = temperature;
    }
    getInfo(): string {
      return `temperature ${this.temperature}°C`;
    }
  }
  class HumidityChangeEvent extends WeatherEvent {
    humidity: number;

    constructor(timestamp: Date, humidity: number) {
      super(timestamp);
      this.humidity = humidity;
    }
    getInfo(): string {
      return `humidity ${this.humidity}%`;
    }
  }
  class WindStrengthChangeEvent extends WeatherEvent{
    windspeed: number;
    constructor(timestamp: Date, windspeed: number){
      super(timestamp);
      this.windspeed = windspeed;
    }
    getInfo(): string {
      return `windspeed ${this.windspeed} m/s`; 
    }
  }

  const weatherEvents = [];

  weatherEvents.push(new TemperatureChangeEvent(new Date("2022-11-29 03:00"), -6.4));
  weatherEvents.push(new HumidityChangeEvent(new Date("2022-11-29 04:00"), 95));
  weatherEvents.push(new WindStrengthChangeEvent(new Date("2022-11-30 13:00"), 2.2));
  
  weatherEvents.forEach(weatherEvent => weatherEvent.print());

}
