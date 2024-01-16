import "./ItemModal.css";

const ItemModal = ({ selectedCard, onClose, onDelete }) => {
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
        <button
          type="button"
          className="modal__item-delete-button"
          onClick={onDelete}
        >
          Delete Item
        </button>
      </div>
    </div>
  );
};

export default ItemModal;
