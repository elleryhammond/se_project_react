import "./ItemModal.css";

const ItemModal = ({ selectedCard, onClose, onDelete }) => {
  const handleDelete = () => {
    onDelete(selectedCard._id);
  };
  return (
    <div className={`modal`}>
      <div className="modal__content">
        <button className="modal__button" type="button" onClick={onClose} />
        <img
          className="modal__image-preview"
          src={selectedCard.imageUrl}
          alt={selectedCard.name}
        />
        <div className="modal__info">
          <p className="modal__item-description">{selectedCard.name}</p>
          <div className="modal__weather-description">
            Weather: {selectedCard.weather}
          </div>
          <button
            type="button"
            className="modal__item-delete-button"
            onClick={handleDelete}
          >
            Delete Item
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
