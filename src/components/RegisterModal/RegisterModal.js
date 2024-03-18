import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const RegisterModal = ({
  handleCloseModal,
  onRegistration,
  onAltClick,
  isOpen,
  isLoading,
}) => {
  const [name, setName] = useState("");
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const [email, setEmail] = useState("");
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const [password, setPassword] = useState("");
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const [link, setUrl] = useState("");
  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onRegistration({ email, password, name, avatar: link });
  };

  const handleAltClick = (event) => {
    event.preventDefault();
    onAltClick("login");
  };

  return (
    <ModalWithForm
      title="Sign Up"
      buttonText="Sign Up"
      name="register"
      onClose={handleCloseModal}
      onRegistration={onRegistration}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      handleAltClick={handleAltClick}
      isLoading={isLoading}
    >
      <label>
        Email*
        <input
          className="modal__input"
          type="email"
          name="email"
          minLength="1"
          maxLength="30"
          placeholder="Email"
          value={email}
          required
          onChange={handleEmailChange}
        />
      </label>
      <label>
        Password*
        <input
          className="modal__input"
          type="password"
          name="password"
          minLength="8"
          maxLength="30"
          placeholder="Email"
          value={password}
          required
          onChange={handlePasswordChange}
        />
      </label>
      <label>
        Name*
        <input
          className="modal__input"
          type="name"
          name="name"
          minLength="2"
          maxLength="30"
          placeholder="Name"
          value={name}
          required
          onChange={handleNameChange}
        />
      </label>
      <label>
        Avatar URL*
        <input
          className="modal__input"
          type="url"
          name="link"
          placeholder="Avatar URL"
          value={link}
          required
          onChange={handleUrlChange}
        />
      </label>
    </ModalWithForm>
  );
};

export default RegisterModal;
