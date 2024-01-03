import logo from "../../logo.svg";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState, useEffect } from "react";
import ItemModal from "../ItemModal/ItemModal";
import { getForecastWeather, parseWeatherData } from "../../utils/weatherApi";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);

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

  // function handleRemoteClick(event) {
  //   if (event && event?.target) {
  //     console.log(event?.target.classList.contains("modal"));
  //   }
  // }
  // useEffect(() => {
  //   document.addEventListener("click", handleRemoteClick);
  // }, []);

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  useEffect(() => {
    getForecastWeather().then((data) => {
      const temperature = parseWeatherData(data);
      setTemp(temperature);
    });
  }, []);

  return (
    <div>
      <Header onCreateModal={handleCreateModal} />
      <Main weatherTemp={temp} onSelectCard={handleSelectedCard} temp={temp} />
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
              <input
                className="weather__type-radio"
                type="radio"
                id="hot"
                value="hot"
              />
              <label className="radio__button-label"> Hot</label>
            </div>
            <div className="weather__inputs">
              <input
                className="weather__type-radio"
                type="radio"
                id="warm"
                value="warm"
              />
              <label className="radio__button-label"> Warm</label>
            </div>
            <div className="weather__inputs">
              <input
                className="weather__type-radio"
                type="radio"
                id="cold"
                value="cold"
              />
              <label className="radio__button-label"> Cold</label>
            </div>
          </div>
        </ModalWithForm>
      )}
      {activeModal === "preview" && (
        <ItemModal selectedCard={selectedCard} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;
