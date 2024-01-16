import "./WeatherCard.css";
import { weatherOptions } from "../../utils/constants";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { useContext } from "react";

const WeatherCard = ({ day, type, weatherTemp = "" }) => {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  const weatherOption = weatherOptions.find((option) => {
    return option.day === day && option.type === type;
  });

  const imageSrcUrl = weatherOption.url || "";

  return (
    <section className="weather" id="weather">
      <div className="weather__info">
        {weatherTemp}° {currentTemperatureUnit}
      </div>
      <img className="weather__image" src={imageSrcUrl} alt="weather" />
    </section>
  );
};

export default WeatherCard;
