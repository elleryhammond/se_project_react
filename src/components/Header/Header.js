import "./Header.css";
import logo from "../../images/wtwrlogo.svg";
import ToggleSwitch from "../ToggleSwith/ToggleSwitch";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";

const Header = ({ onCreateModal, city, onSignUp, onLogin, isLoggedIn }) => {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  const currentUser = useContext(CurrentUserContext);

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
        {isLoggedIn ? (
          <div>
            <button
              className="header__clothes-button"
              type="button"
              onClick={onCreateModal}
            >
              + Add clothes
            </button>
          </div>
        ) : (
          <button className="header__button" type="button" onClick={onSignUp}>
            Sign Up
          </button>
        )}
        {isLoggedIn ? (
          <Link to="/profile">
            <h2 className="header__username">{currentUser?.name}</h2>
            {currentUser?.avatar === "" ? (
              <div className="header__user-img-text">
                {currentUser?.name[0]}
              </div>
            ) : (
              <div className="header__avatar">
                <img
                  src={currentUser?.avatar}
                  alt="avatar logo"
                  className="header__user-image"
                />
              </div>
            )}
          </Link>
        ) : (
          <button className="header__button" type="text" onClick={onLogin}>
            Log In
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;

// import "./Header.css";
// import logo from "../../images/wtwrlogo.svg";
// import ToggleSwitch from "../ToggleSwith/ToggleSwitch";
// import { Link } from "react-router-dom";
// import { CurrentUserContext } from "../../contexts/CurrentUserContext";
// import { useContext } from "react";

// const Header = ({ onCreateModal, city, onSignUp, onLogin, isLoggedIn }) => {
//   const currentDate = new Date().toLocaleString("default", {
//     month: "long",
//     day: "numeric",
//   });

//   const currentUser = useContext(CurrentUserContext);
//   const avatarImage = currentUser && currentUser.avatar !== "" ? true : false;

//   return (
//     <header className="header">
//       <div className="header__logo">
//         {/* <div> */}
//         <Link to="/">
//           <img src={logo} alt="logo" />
//         </Link>
//         {/* </div> */}
//         <div>
//           {currentDate}, {city}
//         </div>
//       </div>

//       <div className="header__container">
//         <ToggleSwitch />
//         {isLoggedIn ? (
//           <>
//             <div>
//               <button
//                 className="header__clothes-button"
//                 type="button"
//                 onClick={onCreateModal}
//               >
//                 + Add clothes
//               </button>
//             </div>
//             <Link to="/profile">
//               <div className="header__username">{currentUser?.name}</div>
//             </Link>
//             {avatarImage ? (
//               <div className="header__avatar">
//                 <img
//                   src={currentUser?.avatar}
//                   alt="avatar logo"
//                   className="header__user-image"
//                 ></img>
//               </div>
//             ) : (
//               <p className="header__user-img-text">
//                 {currentUser?.name[0].toUpperCase()}
//               </p>
//             )}
//           </>
//         ) : (
//           <>
//             <button className="header__button" type="button" onClick={onSignUp}>
//               Sign Up
//             </button>
//             <button className="header__button" type="button" onClick={onLogin}>
//               Log In
//             </button>
//           </>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;
