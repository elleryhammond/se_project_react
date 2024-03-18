import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const AddItemModal = ({ handleCloseModal, onAddItem, isOpen }) => {
  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const [imageUrl, setUrl] = useState("");
  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  const [weatherType, setWeatherType] = useState("");
  const handleWeatherChange = (e) => {
    setWeatherType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({ name, imageUrl, weather: weatherType });
  };

  return (
    <ModalWithForm
      title="New garmet"
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label className="input__header" htmlFor="name">
        Name
        <input
          className="input"
          type="text"
          name="name"
          id="name"
          minLength="1"
          maxLength="30"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
          required
        />
      </label>
      <label className="input__header" htmlFor="url">
        Image
        <input
          className="input"
          type="url"
          name="url"
          id="url"
          minLength="1"
          placeholder="Image URL"
          value={imageUrl}
          onChange={handleUrlChange}
        />
      </label>
      <p className="input__type-header">Select the weather type:</p>
      <div>
        <div className="weather__inputs">
          <label
            className="radio__button-label"
            name="weather__type-radio"
            htmlFor="hot"
          >
            <input
              className="weather__type-radio"
              type="radio"
              id="hot"
              value="hot"
              name="weather-type-radio"
              onChange={handleWeatherChange}
              checked={weatherType === "hot"}
            />
            Hot
          </label>
        </div>
        <div className="weather__inputs">
          <label
            className="radio__button-label"
            name="weather__type-radio"
            htmlFor="warm"
          >
            <input
              className="weather__type-radio"
              type="radio"
              id="warm"
              value="warm"
              name="weather__type-radio"
              onChange={handleWeatherChange}
              checked={weatherType === "warm"}
            />
            Warm
          </label>
        </div>
        <div className="weather__inputs">
          <label
            className="radio__button-label"
            name="weather__type-radio"
            htmlFor="cold"
          >
            <input
              className="weather__type-radio"
              type="radio"
              id="cold"
              value="cold"
              name="weather__type-radio"
              onChange={handleWeatherChange}
              checked={weatherType === "cold"}
            />
            Cold
          </label>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default AddItemModal;
