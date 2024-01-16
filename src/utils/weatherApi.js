import { processServerResponse } from "./Api";

const latitude = 45.5152;
const longitude = -122.6784;
const APIkey = "23ef5266ca0cf7faba0798200aafcc08";
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`;

export const getForecastWeather = () => {
  const weatherApi = fetch(url).then((res) => {
    return processServerResponse(res);
  });
  return weatherApi;
};

export const parseWeatherData = (data) => {
  const main = data.main;
  const temperature = main && main.temp;
  const weather = {
    temperature: {
      F: Math.round(temperature),
      C: Math.round(((temperature - 32) * 5) / 9),
    },
  };
  return weather;
};
