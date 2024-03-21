import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import "./Main.css";
import React, { useMemo, useContext } from "react";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

function Main({
  weatherTemp,
  onSelectCard,
  clothingItems,
  isLoggedIn,
  handleCardLike,
}) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const temp = weatherTemp?.temperature?.[currentTemperatureUnit] || 999;
  const tempF = currentTemperatureUnit === "F" ? temp : temp * 1.8 + 32;

  const weatherType = useMemo(() => {
    if (tempF >= 86) {
      return "hot";
    } else if (tempF >= 60 && tempF <= 85) {
      return "warm";
    } else if (tempF <= 59) {
      return "cold";
    }
  }, [tempF]);

  const filteredCards = clothingItems.filter((item) => {
    return item.weather.toLowerCase() === weatherType;
  });

  return (
    <main className="main">
      <WeatherCard day={false} type={"cloudy"} weatherTemp={temp} />
      <section className="card__section" id="card-section">
        Today is {temp}° {currentTemperatureUnit} / You may want to wear:
        <div className="card__items">
          {filteredCards.map((item) => {
            return (
              <ItemCard
                key={item._id}
                item={item}
                onSelectCard={onSelectCard}
                handleCardLike={handleCardLike}
                isLoggedIn={isLoggedIn}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}
export default Main;
