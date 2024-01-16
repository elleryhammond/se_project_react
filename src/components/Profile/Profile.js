import React from "react";
import SideBar from "./SideBar";
import ClothesSection from "./ClothesSection";
import "./Profile.css";

const Profile = ({ onCreate, clothingItems, onSelectCard }) => {
  return (
    <section className="profile">
      <div className="profile__sidebar">
        <SideBar />
      </div>
      <ClothesSection
        clothingItems={clothingItems}
        onSelectCard={onSelectCard}
        onCreate={onCreate}
      />
    </section>
  );
};

export default Profile;
