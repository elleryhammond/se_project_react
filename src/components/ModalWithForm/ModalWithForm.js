import "./ModalWithForm.css";
import { Link } from "react-router-dom";

const ModalWithForm = ({
  children,
  buttonText = "Add garmet",
  title,
  onClose,
  name,
  onSubmit,
  alternativeText,
  handleAltClick,
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
          />
        </h3>
        <form className="modal__form" onSubmit={onSubmit}>
          {children}
          <div className="modal__button-container">
            <button className="modal__form-submit" type="submit">
              {buttonText}
            </button>
            {alternativeText && (
              <p>
                <Link
                  className="modal__alt_click-button"
                  to="/"
                  onClick={handleAltClick}
                >
                  {alternativeText}
                </Link>
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
