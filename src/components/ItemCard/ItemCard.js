import "./ItemCard.css";

const ItemCard = ({ item, onSelectCard }) => {
  return (
    <div className="card__element">
      <h2 className="card__name"> {item.name} </h2>
      <img
        className="card__image"
        src={item.link}
        alt={item.name}
        onClick={() => onSelectCard(item)}
      />
    </div>
  );
};

export default ItemCard;
