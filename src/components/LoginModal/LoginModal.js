import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const LoginModal = ({
  onAltClick,
  onLogin,
  handleCloseModal,
  isLoading,
  isOpen,
}) => {
  const [email, setEmail] = useState("");
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const [password, setPassword] = useState("");
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin({ email, password });
  };

  const handleAltClick = (event) => {
    event.preventDefault();
    onAltClick("register");
  };

  return (
    <ModalWithForm
      title="Log In"
      buttonText="Log In"
      name="login"
      onClose={handleCloseModal}
      onLogin={onLogin}
      onSubmit={handleSubmit}
      isLoading={isLoading}
      handleAltClick={handleAltClick}
      isOpen={isOpen}
    >
      <label>
        Email
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
        Password
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
    </ModalWithForm>
  );
};

export default LoginModal;
