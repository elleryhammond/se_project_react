import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const RegisterModal = ({ handleCloseModal, onSignUp, onAltClick, isOpen }) => {
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
    onSignUp({ email, password, name, avatar: link });
  };

  const handleAltClick = (event) => {
    event.preventDefault();
    onAltClick("login");
  };

  return (
    <ModalWithForm
      title="Sign Up"
      buttonText="Sign Up"
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      handleAltClick={handleAltClick}
      alternativeText="or Log In"
    >
      <label className="input__header" htmlFor="email">
        Email*
        <input
          className="input"
          type="email"
          name="email"
          id="email"
          minLength="1"
          maxLength="30"
          placeholder="Email"
          value={email}
          required
          onChange={handleEmailChange}
        />
      </label>
      <label className="input__header" htmlFor="password">
        Password*
        <input
          className="input"
          type="password"
          name="password"
          id="password"
          minLength="8"
          maxLength="30"
          placeholder="Password"
          value={password}
          required
          onChange={handlePasswordChange}
        />
      </label>
      <label className="input__header" htmlFor="name">
        Name*
        <input
          className="input"
          type="name"
          name="name"
          id="name"
          minLength="2"
          maxLength="30"
          placeholder="Name"
          value={name}
          required
          onChange={handleNameChange}
        />
      </label>
      <label className="input__header">
        Avatar URL*
        <input
          className="input"
          type="url"
          name="avatar"
          // id="link"
          placeholder="Avatar URL"
          value={link}
          onChange={handleUrlChange}
          required
        />
      </label>
    </ModalWithForm>
  );
};

export default RegisterModal;
