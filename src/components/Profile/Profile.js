import React from "react";
import SideBar from "./SideBar";
import ClothesSection from "./ClothesSection";
import "./Profile.css";

const Profile = ({
  onCreate,
  clothingItems,
  onSelectCard,
  isLoggedIn,
  onEditProfile,
  currentUser,
}) => {
  return (
    <div className="profile">
      <SideBar onEditProfile={onEditProfile} currentUser={currentUser} />
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
