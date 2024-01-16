import React from "react";
import avatar from "../../images/avatar.svg";
import "./SideBar.css";

const SideBar = () => {
  return (
    <div className="profile__sidebar">
      <img className="profile__image" src={avatar} alt="Avatar" />
      <p className="profile__username">Terrence Tegegne</p>
    </div>
  );
};

export default SideBar;
