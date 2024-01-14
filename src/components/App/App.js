import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState, useEffect } from "react";
import ItemModal from "../ItemModal/ItemModal";
import { getForecastWeather, parseWeatherData } from "../../utils/weatherApi";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("");
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  useEffect(() => {
    if (!activeModal) return;
    const handleEscClose = (event) => {
      if (event.key === "Escape") {
        handleCloseModal();
      }
    };
    document.addEventListener("keydown", handleEscClose);
    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal]);

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === "F"
      ? setCurrentTemperatureUnit("C")
      : setCurrentTemperatureUnit("F");
  };

  useEffect(() => {
    getForecastWeather()
      .then((data) => {
        setCity(data.name);
        const temperature = parseWeatherData(data);
        setTemp(temperature);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <Header onCreateModal={handleCreateModal} city={city} temp={temp} />
        <Main weatherTemp={temp} onSelectCard={handleSelectedCard} />
        <Footer />
        {activeModal === "create" && (
          <ModalWithForm title="New garmet" onClose={handleCloseModal}>
            <label className="input__header">
              Name
              <input
                className="input"
                type="text"
                name="name"
                minLength="1"
                maxLength="30"
                placeholder="Name"
              />
            </label>
            <label className="input__header">
              Image
              <input
                className="input"
                type="url"
                name="link"
                minLength="1"
                maxLength="30"
                placeholder="Image URL"
              />
            </label>
            <p className="input__type-header">Select the weather type:</p>
            <div>
              <div className="weather__inputs">
                <label className="radio__button-label">
                  <input
                    className="weather__type-radio"
                    type="radio"
                    id="hot"
                    value="hot"
                    name="weatherType"
                  />
                  Hot
                </label>
              </div>
              <div className="weather__inputs">
                <label className="radio__button-label">
                  <input
                    className="weather__type-radio"
                    type="radio"
                    id="warm"
                    value="warm"
                    name="weatherType"
                  />
                  Warm
                </label>
              </div>
              <div className="weather__inputs">
                <label className="radio__button-label">
                  <input
                    className="weather__type-radio"
                    type="radio"
                    id="cold"
                    value="cold"
                    name="weatherType"
                  />
                  Cold
                </label>
              </div>
            </div>
          </ModalWithForm>
        )}
        {activeModal === "preview" && (
          <ItemModal selectedCard={selectedCard} onClose={handleCloseModal} />
        )}
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
