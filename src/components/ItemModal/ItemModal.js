import "./ItemModal.css";

const ItemModal = ({ selectedCard, onClose }) => {
  return (
    <div className={`modal`}>
      <div className="modal__content">
        <button className="modal__button" type="button" onClick={onClose} />
        <img
          className="modal__image-preview"
          src={selectedCard.link}
          alt={selectedCard.name}
        />
        <h3 className="modal__item-description">{selectedCard.name}</h3>
        <div className="modal__weather-description">
          Weather: {selectedCard.weather}
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
