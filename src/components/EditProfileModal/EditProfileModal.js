import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useContext, useEffect, useState } from "react";

const EditProfileModal = ({ handleCloseModal, isOpen, onSubmit }) => {
  const { currentUser } = useContext(CurrentUserContext);
  const token = localStorage.getItem("jwt");

  const [name, setName] = useState(currentUser.name || "");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const [avatar, setAvatar] = useState(currentUser.avatar || "");
  const handleAvatarChange = (e) => {
    setAvatar(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(name, avatar, token);
  };

  useEffect(() => {
    if (isOpen && currentUser) {
      setName(currentUser?.name || "");
      setAvatar(currentUser?.avatar || "");
    }
  }, [isOpen, currentUser]);

  return (
    <ModalWithForm
      title="Edit Profile"
      onClose={handleCloseModal}
      name={"edit"}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      buttonText="Save changes"
    >
      <label className="input__header" htmlFor="name">
        Name
        <input
          className="input"
          type="text"
          name="name"
          id="name"
          minLength="1"
          maxLength="30"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
        />
      </label>
      <label className="input__header">
        Avatar
        <input
          className="input"
          type="url"
          name="avatar"
          minLength="1"
          maxLength="200"
          placeholder="Image URL"
          value={avatar}
          onChange={handleAvatarChange}
        />
      </label>
    </ModalWithForm>
  );
};

export default EditProfileModal;
