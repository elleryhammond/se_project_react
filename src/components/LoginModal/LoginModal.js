import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const LoginModal = ({ handleCloseModal, onSignIn, isOpen, onAltClick }) => {
  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const [password, setPassword] = useState("");
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignIn({ email, password });
  };

  const handleAltClick = (event) => {
    event.preventDefault();
    onAltClick("register");
  };

  return (
    <ModalWithForm
      title="Log In"
      onClose={handleCloseModal}
      isOpen={isOpen}
      buttonText="Log In"
      onSubmit={handleSubmit}
      handleAltClick={handleAltClick}
      alternativeText="or Sign Up"
    >
      <label className="input__header" htmlFor="email">
        Email
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
        Password
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
    </ModalWithForm>
  );
};

export default LoginModal;
