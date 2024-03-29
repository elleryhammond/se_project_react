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
  onLogOut,
  handleCardLike,
}) => {
  return (
    <div className="profile">
      <SideBar
        onEditProfile={onEditProfile}
        currentUser={currentUser}
        onLogOut={onLogOut}
      />
      <ClothesSection
        clothingItems={clothingItems}
        onSelectCard={onSelectCard}
        onCreate={onCreate}
        isLoggedIn={isLoggedIn}
        handleCardLike={handleCardLike}
      />
    </div>
  );
};

export default Profile;
