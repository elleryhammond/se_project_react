import "./Header.css";

const Header = () => {
  console.log("Header");

  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <img src={require("../../images/wtwrlogo.svg").default} alt="Logo" />
        </div>
        <div>Date</div>
      </div>
      <div className="header__avatar-logo">
        <div>
          <button className="header__button" type="text">
            {" "}
            + Add clothes
          </button>
        </div>
        <div>Terrence Tegegne</div>
        <div>
          <img src={require("../../images/avatar.svg").default} alt="Avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;
