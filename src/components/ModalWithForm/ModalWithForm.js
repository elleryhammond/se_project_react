import "./ModalWithForm.css";

const ModalWithForm = ({
  children,
  buttonText = "Add garmet",
  title,
  onClose,
  name,
}) => {
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__content">
        <h3 className="modal__header">
          {title}
          <button
            className="modal__close-button"
            type="button"
            onClick={onClose}
          ></button>
        </h3>
        <form className="modal__form">
          {children}
          <button className="modal__form-submit" type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
