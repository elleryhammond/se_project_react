import React, { useContext } from "react";
import "./SideBar.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const SideBar = ({ onEditProfile }) => {
  const { currentUser } = useContext(CurrentUserContext);

  const handleEditProfileClick = () => {
    onEditProfile(currentUser);
  };

  // const handleLogout = () => {
  //   onLogout();
  // };

  return (
    <div className="sidebar">
      <div className="sidebar__info">
        <img
          className="sidebar__image"
          src={currentUser?.avatar}
          alt="Avatar"
        />
        <p className="sidebar__username">{currentUser?.name}</p>
      </div>
      <div>
        <button
          className="sidebar__button"
          type="button"
          onClick={handleEditProfileClick}
        >
          Change Profile Data
        </button>
      </div>
    </div>
  );
};

export default SideBar;
