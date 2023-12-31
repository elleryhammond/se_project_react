import "./WeatherCard.css";

const weatherOptions = [
  {
    url: require("../../images/sunny.svg").default,
    day: true,
    type: "clear",
  },
  {
    url: require("../../images/cloudy.svg").default,
    day: true,
    type: "cloudy",
  },
  {
    url: require("../../images/rain.svg").default,
    day: true,
    type: "rain",
  },
  {
    url: require("../../images/storm.svg").default,
    day: true,
    type: "storm",
  },
  {
    url: require("../../images/snow.svg").default,
    day: true,
    type: "snow",
  },
  {
    url: require("../../images/fog.svg").default,
    day: true,
    type: "fog",
  },
  {
    url: require("../../images/sunny-night.svg").default,
    day: false,
    type: "clear",
  },
  {
    url: require("../../images/cloudy-night.svg").default,
    day: false,
    type: "cloudy",
  },
  {
    url: require("../../images/rain-night.svg").default,
    day: false,
    type: "rain",
  },
  {
    url: require("../../images/storm-night.svg").default,
    day: false,
    type: "storm",
  },
  {
    url: require("../../images/snow-night.svg").default,
    day: false,
    type: "snow",
  },
  {
    url: require("../../images/fog-night.svg").default,
    day: false,
    type: "fog",
  },
];

const WeatherCard = ({ day, type, weatherTemp = "" }) => {
  console.log("weather card");
  const imageSrc = weatherOptions.filter((i) => {
    console.log(i);
    return i.day === day && i.type === type;
  });

  console.log(imageSrc);
  console.log(imageSrc[0].url);

  const imageSrcUrl = imageSrc[0].url || "";

  return (
    <section className="weather" id="weather">
      <div className="weather__info">{weatherTemp}</div>
      <img className="weather__image" src={imageSrcUrl} />
    </section>
  );
};

export default WeatherCard;
