import "./Header.css";
import logo from "../../images/wtwrlogo.svg";
import avatar from "../../images/avatar.svg";
import ToggleSwitch from "../ToggleSwith/ToggleSwitch";
import { Link } from "react-router-dom";

const Header = ({ onCreateModal, city }) => {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <Link to="/">
            <img src={logo} alt="What To Wear Logo" />
          </Link>
        </div>
        <div className="header__date">
          {currentDate}, {city}
        </div>
      </div>
      <div className="header__avatar-logo">
        <ToggleSwitch />
        <div>
          <button
            className="header__button"
            type="text"
            onClick={onCreateModal}
          >
            + Add clothes
          </button>
        </div>
        <Link to="/profile" className="header__username">
          Terrence Tegegne
        </Link>
        <div>
          <img src={avatar} alt="avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;
