import "./Header.css";
import logo from "../../images/wtwrlogo.svg";
// import avatar from "../../images/avatar.svg";
import ToggleSwitch from "../ToggleSwith/ToggleSwitch";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";
import UserPlaceHolder from "../UserPlaceHolder/UserPlaceHolder";

const Header = ({ onCreateModal, city, onSignUp, onLogin, isLoggedIn }) => {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  const { currentUser } = useContext(CurrentUserContext);

  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div>
          {currentDate}, {city}
        </div>
      </div>

      <div className="header__container">
        <ToggleSwitch />
        <div>
          {isLoggedIn ? (
            <button
              className="header__clothes-button"
              type="button"
              onClick={onCreateModal}
            >
              + Add clothes
            </button>
          ) : (
            <></>
          )}
        </div>
        {isLoggedIn ? (
          <p to="/profile" className="header__username">
            {currentUser.name}
          </p>
        ) : (
          <Link to="/register" onClick={onSignUp} className="header__signin">
            Sign Up
          </Link>
        )}

        <div>
          {isLoggedIn ? (
            currentUser.avatar ? (
              <Link to="/profile">
                <img
                  src={currentUser.avatar}
                  className="header__avatar"
                  alt="avatar"
                />
              </Link>
            ) : (
              <UserPlaceHolder isLoggedIn={isLoggedIn} />
            )
          ) : (
            <Link to="/login" onClick={onLogin} className="header__signin">
              Log in
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
