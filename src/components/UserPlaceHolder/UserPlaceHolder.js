import React from "react";
import "./UserPlaceHolder.css";

const UserPlaceHolder = ({ name }) => {
  const firstInitial = name ? name[0].toUpperCase() : "";

  return (
    <div className="user__placeholder">
      <div className="placeholder__image">{firstInitial}</div>
    </div>
  );
};

export default UserPlaceHolder;
