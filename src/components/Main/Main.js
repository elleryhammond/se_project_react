import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import "./Main.css";
import React, { useMemo, useContext } from "react";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
// import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Main({ weatherTemp, onSelectCard, clothingItems }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  // const temp = weatherTemp?.temperature?.[currentTemperatureUnit] || 999;
  // const tempF = currentTemperatureUnit === "F" ? temp : temp * 1.8 + 32;

  // const weatherType = useMemo(() => {
  //   if (tempF >= 86) {
  //     return "hot";
  //   } else if (tempF >= 66 && tempF <= 85) {
  //     return "warm";
  //   } else if (tempF <= 65) {
  //     return "cold";
  //   }
  // }, [weatherTemp]);

  //Refactor to fix dev dependency issue
  const temp = currentTemperatureUnit === "°C" ? weatherTemp.C : weatherTemp.F;
  const weatherType = useMemo(() => {
    let hot = 80;
    let warm = 66;

    const tempF = weatherTemp.F;

    if (tempF > hot) {
      return "hot";
    } else if (tempF >= warm && tempF <= hot) {
      return "warm";
    } else if (tempF <= warm) {
      return "cold";
    }
  }, [weatherTemp]);

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
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}
export default Main;
