import "./ItemCard.css";

const ItemCard = ({ item, onSelectCard }) => {
  return (
    <div>
      <div>
        <div className="card__name"> {item.name} </div>
        <img
          className="card__image"
          src={item.link}
          alt="clothing item"
          onClick={() => onSelectCard(item)}
        />
      </div>
    </div>
  );
};

export default ItemCard;
