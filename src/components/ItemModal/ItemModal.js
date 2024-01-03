import "./ItemModal.css";

const ItemModal = ({ selectedCard, onClose }) => {
  return (
    <div className={`modal`}>
      <div className="modal__content">
        <button
          className="modal__button"
          type="button"
          onClick={onClose}
        ></button>
        <img
          className="modal__image-preview"
          src={selectedCard.link}
          alt="clothing item"
        />
        <div className="modal__item-description">{selectedCard.name}</div>
        <div className="modal__weather-description">
          Weather: {selectedCard.weather}
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
