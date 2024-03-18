import React from "react";
import SideBar from "./SideBar";
import ClothesSection from "./ClothesSection";
import "./Profile.css";

const Profile = ({ onCreate, clothingItems, onSelectCard, isLoggedIn }) => {
  return (
    <div className="profile">
      <SideBar />
      <ClothesSection
        clothingItems={clothingItems}
        onSelectCard={onSelectCard}
        onCreate={onCreate}
        isLoggedIn={isLoggedIn}
      />
    </div>
  );
};

export default Profile;
