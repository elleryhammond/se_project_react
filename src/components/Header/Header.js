import "./Header.css";
import logo from "../../images/wtwrlogo.svg";

const Header = ({ onCreateModal, city }) => {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <img src={logo} alt="Logo" />
        </div>
        <div className="header__date">
          {currentDate}, {city}
        </div>
      </div>
      <div className="header__avatar-logo">
        <div>
          <button
            className="header__button"
            type="text"
            onClick={onCreateModal}
          >
            + Add clothes
          </button>
        </div>
        <h3 className="header__username">Terrence Tegegne</h3>
        <div>
          <img src={require("../../images/avatar.svg").default} alt="avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;
