import "./Header.css";
import logo from "../../images/wtwrlogo.svg";
// import avatar from "../../images/avatar.svg";
import ToggleSwitch from "../ToggleSwith/ToggleSwitch";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";
import UserPlaceHolder from "../UserPlaceHolder/UserPlaceHolder";

const Header = ({ onCreateModal, city, onSignUp, onLogin }) => {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  const { currentUser, loggedIn } = useContext(CurrentUserContext);

  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <Link to="/">
            <img src={logo} alt="What To Wear Logo" />
          </Link>
        </div>
        <div>
          <div className="header__date">
            {currentDate}, {city}
          </div>
        </div>
      </div>

      <div className="header__container">
        <ToggleSwitch />

        {loggedIn && (
          <div>
            <button
              className="header__clothes-button"
              type="text"
              onClick={onCreateModal}
            >
              + Add clothes
            </button>
          </div>
        )}

        {loggedIn ? (
          currentUser && currentUser.name ? (
            <Link to="/profile" className="header__username">
              {currentUser.name}
            </Link>
          ) : (
            <div>Welcome</div>
          )
        ) : (
          <div>
            <button className="header__button" type="button" onClick={onSignUp}>
              Sign Up
            </button>
          </div>
        )}
        <div>
          {loggedIn ? (
            currentUser && currentUser.avatar ? (
              <Link to="/profile">
                <img
                  src={currentUser.avatar}
                  className="header__avatar-login"
                  alt="avatar"
                />
              </Link>
            ) : (
              <div>
                {currentUser ? (
                  <UserPlaceHolder userName={currentUser.name} />
                ) : null}
              </div>
            )
          ) : (
            <div>
              <button className="header__button" onClick={onLogin}>
                Log In
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
