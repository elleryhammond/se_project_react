import React, { useContext } from "react";
import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const ClothesSection = ({
  onSelectCard,
  clothingItems,
  onCreate,
  handleCardLike,
  isLoggedIn,
}) => {
  const { currentUser } = useContext(CurrentUserContext);
  const userItems = clothingItems.filter((item) => {
    return item.owner === currentUser?._id;
  });

  return (
    <div className="clothes__section">
      <div className="clothes__container">
        <h2 className="clothes__section-text">
          Your clothing items
          <button
            className="clothes__add-button"
            onClick={onCreate}
            type="button"
          >
            + Add New
          </button>
        </h2>
      </div>
      <div className="clothes__section-cards">
        {userItems.map((item) => {
          return (
            <ItemCard
              item={item}
              key={item._id}
              onSelectCard={onSelectCard}
              handleCardLike={handleCardLike}
              isLoggedIn={isLoggedIn}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ClothesSection;
