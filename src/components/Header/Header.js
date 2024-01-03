import "./Header.css";

const Header = ({ onCreateModal }) => {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <img src={require("../../images/wtwrlogo.svg").default} alt="Logo" />
        </div>
        <div className="header__date">{currentDate}</div>
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
        <div className="avatar__name">Terrence Tegegne</div>
        <div>
          <img src={require("../../images/avatar.svg").default} alt="Avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;
