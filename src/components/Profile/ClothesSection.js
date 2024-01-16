import React from "react";
import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";

const ClothesSection = ({ onSelectCard, clothingItems, onCreate }) => {
  return (
    <div className="clothes__section">
      <div className="profile__heading">
        <h2 className="profile__title">
          Your clothing items
          <button
            className="profile__add-button"
            onClick={onCreate}
            type="button"
          >
            +Add New
          </button>
        </h2>
      </div>
      <div className="profile__section-cards">
        {clothingItems.map((item) => {
          return (
            <ItemCard item={item} key={item._id} onSelectCard={onSelectCard} />
          );
        })}
      </div>
    </div>
  );
};

export default ClothesSection;
