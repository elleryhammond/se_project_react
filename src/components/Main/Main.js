import { defaultClothingItems } from "../../utils/constants";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import "./Main.css";

function Main({ weatherTemp }) {
  return (
    <main className="main">
      <WeatherCard day={false} type="fog" weatherTemp={weatherTemp} />
      <section className="card__section" id="card-section">
        Today is {weatherTemp} F / You may want to wear:
        <div className="card__items">
          {defaultClothingItems.map((item) => (
            <ItemCard item={item} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
