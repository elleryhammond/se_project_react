import React from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import AddItemModal from "../AddItemModal/AddItemModal";
import Profile from "../Profile/Profile";
import ItemModal from "../ItemModal/ItemModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

import { useState, useEffect } from "react";
import { getForecastWeather, parseWeatherData } from "../../utils/weatherApi";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { Switch, Route } from "react-router-dom";
import { getItems, postItems, deleteItems } from "../../utils/Api";
import { signUp, signIn, checkToken } from "../../utils/auth";
// import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
// import * as auth from "../../utils/auth";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("");
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("jwt") || "");

  // const history = useHistory();

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleRegisterModal = () => {
    setActiveModal("register");
  };

  const handleLoginModal = () => {
    setActiveModal("login");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleAltModal = (alt) => {
    handleCloseModal();
    setActiveModal(alt);
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === "F"
      ? setCurrentTemperatureUnit("C")
      : setCurrentTemperatureUnit("F");
  };

  // const handleSignOut = () => {
  //   localStorage.removeItem("jwt");
  //   setCurrentUser({});
  //   setIsLoggedIn(false);
  //   history.pushState("/");
  // };

  const handleDeleteCard = (_id) => {
    const jwt = localStorage.getItem("jwt");
    setIsLoading(true);
    deleteItems(_id, jwt)
      .then(() => {
        const updatedItems = clothingItems.filter((item) => {
          return item._id !== _id;
        });
        setClothingItems(updatedItems);
        handleCloseModal();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  };

  const onAddItem = (values) => {
    const jwt = localStorage.getItem("jwt");
    setIsLoading(true);
    postItems(values, jwt)
      .then((res) => {
        setClothingItems([res, ...clothingItems]);
        handleCloseModal();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  };

  function onSignUp(request) {
    setIsLoading(true);
    signUp(request)
      .then((res) => {
        setIsLoggedIn(true);
        setCurrentUser(res);
      })
      .then(handleCloseModal)
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }

  function onSignIn(request) {
    setIsLoading(true);
    signIn(request)
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        setToken(localStorage.getItem("jwt"));
        setIsLoggedIn(true);
      })
      .then(handleCloseModal)
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }

  useEffect(() => {
    getForecastWeather()
      .then((data) => {
        setCity(data.name);
        const temperature = parseWeatherData(data);
        setTemp(temperature);
      })
      .catch((err) => console.log(err));
    getItems()
      // .then((data) => setClothingItems(data))
      .then((data) => setClothingItems(data.clothingItems))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (!activeModal) return;
    const handleEscClose = (event) => {
      if (event.key === "Escape") {
        handleCloseModal();
      }
    };
    document.addEventListener("keydown", handleEscClose);
    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal]);

  //Check for token
  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      setToken(jwt);
      checkToken(jwt)
        .then((data) => {
          setCurrentUser(data);
          setIsLoggedIn(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [token]);

  return (
    <CurrentUserContext.Provider value={{ currentUser }}>
      <div className="page">
        <CurrentTemperatureUnitContext.Provider
          value={{ currentTemperatureUnit, handleToggleSwitchChange }}
        >
          <Header
            onCreateModal={handleCreateModal}
            city={city}
            temp={temp}
            onSignUp={handleRegisterModal}
            onLogin={handleLoginModal}
            isLoggedIn={isLoggedIn}
          />
          <Switch>
            <Route exact path="/">
              <Main
                weatherTemp={temp}
                onSelectCard={handleSelectedCard}
                clothingItems={clothingItems}
                // isLoggedIn={isLoggedIn}
              />
            </Route>
            <ProtectedRoute path="/profile" isLoggedIn={isLoggedIn}>
              <Profile
                onSelectCard={handleSelectedCard}
                clothingItems={clothingItems}
                onCreate={handleCreateModal}
                isLoggedIn={isLoggedIn}
                onCreateModal={handleCreateModal}
                onAltClick={handleAltModal}
              />
            </ProtectedRoute>
          </Switch>
          <Footer />
          {activeModal === "register" && (
            <RegisterModal
              isOpen={activeModal === "register"}
              buttonText={!isLoading ? "Sign in" : "Signing in..."}
              onSignUp={onSignUp}
              handleCloseModal={handleCloseModal}
              onAltClick={handleAltModal}
            />
          )}
          {activeModal === "login" && (
            <LoginModal
              handleCloseModal={handleCloseModal}
              onSignIn={onSignIn}
              onAltClick={handleAltModal}
              isOpen={activeModal === "login"}
              buttonText={!isLoading ? "Log in" : "Logging in..."}
            />
          )}

          {activeModal === "create" && (
            <AddItemModal
              handleCloseModal={handleCloseModal}
              onAddItem={onAddItem}
              isOpen={activeModal === "create"}
              buttonText={!isLoading ? "Add garmet" : "Adding..."}
            />
          )}
          {activeModal === "preview" && (
            <ItemModal
              selectedCard={selectedCard}
              onClose={handleCloseModal}
              onDelete={handleDeleteCard}
              buttonText={!isLoading ? "Delete Item" : "Deleting..."}
            />
          )}
        </CurrentTemperatureUnitContext.Provider>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
