import "./ItemCard.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";

const ItemCard = ({ item, onSelectCard, handleCardLike, isLoggedIn }) => {
  const { currentUser } = useContext(CurrentUserContext);
  const id = item._id;
  const isLiked = item.likes.some((user) => {
    return user.includes(currentUser?._id);
  });

  const itemLikeButtonClassName = `card__like-button ${
    isLiked ? "card__like-button_active" : ""
  }`;

  const handleCardLikeClick = () => {
    handleCardLike(id, isLiked);
  };

  return (
    <div className="card__element">
      <div className="card__info">
        <div className="card__container">
          <div className="card__name"> {item.name} </div>
        </div>
        {isLoggedIn && (
          <button
            className={itemLikeButtonClassName}
            type="button"
            onClick={() => {
              handleCardLikeClick(id, isLiked);
            }}
          ></button>
        )}
      </div>
      <img
        className="card__image"
        src={item.imageUrl}
        alt={item.name}
        onClick={() => onSelectCard(item)}
      />
    </div>
  );
};

export default ItemCard;
