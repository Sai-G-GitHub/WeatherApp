import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWind, faFireFlameSimple } from "@fortawesome/free-solid-svg-icons";

const api = {
  key: "e63b56671c0a05094f33782dae2c90d6",
  base: "https://api.openweathermap.org/data/2.5/",
};
// console.log('container', container);
function WeatherComp() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});
  // const [notFound, setNotFound] = useState(false);
  const container = document.querySelector(".container");
  const weatherbox = document.querySelector(".weatherbox");
  const error = document.querySelector(".notfound");

  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
        console.log(result);
        weatherbox.classList.add("fade");
        container.style.height = "550px";
        weatherbox.classList.add("fadeIn");
      });
  };

  return (
    <div className="bg">
      <div>
        <div className="container">
          <div className="main">
            <div className="searchdiv">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  e.target.reset();
                  searchPressed();
                }}
              >
                <input
                  className="searchbox"
                  type="text"
                  value={search}
                  placeholder="Enter city/town..."
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button
                  className="btn btn-success searchbutton"
                  type="submit"
                  onClick={searchPressed}
                >
                  Search
                </button>
              </form>
            </div>
            <div className="weatherbox">
              {typeof weather.main !== "undefined" ? (
                <div>
                  <p className="location">
                    {weather.name}, {weather.sys.country}
                  </p>
                  <p>
                    Coordinates: ({weather.coord.lon}, {weather.coord.lat})
                  </p>
                  {/* <br></br> */}

                  <div className="weatherdes">
                    {weather.weather[0].description}
                  </div>
                  {/* Temperature Celsius  */}
                  <div className="container1">
                    <div className="maintemp">
                      {weather.main.temp.toFixed(0)}
                    </div>
                    {/* °C */}
                    <div className="minmax">
                      <div>High: {weather.main.temp_max.toFixed(0)}</div>
                      <br></br>
                      <div>Low: {weather.main.temp_min.toFixed(0)}</div>
                    </div>
                  </div>
                  <div className="info">
                    <p>
                      <FontAwesomeIcon icon={faWind} />{" "}
                      {Math.round(weather.wind.speed)} km/h
                    </p>
                    <p>
                      <FontAwesomeIcon icon={faFireFlameSimple} />{" "}
                      {Math.round(weather.main.humidity)}%
                    </p>
                  </div>
                </div>
              ) : (
                // <div >Location Not Found...</div>
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherComp;
