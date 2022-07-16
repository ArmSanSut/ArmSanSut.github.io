import React, { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [latitude, setLatitude] = useState([]);
  const [longtitude, setLongtitude] = useState([]);


  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longtitude}&units=metric&appid=4caff8294ee201adf3e5c23ee3dab249`;

  const SearchLocation = (event) => {
    if (event.key === 'Enter') {

      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      setLatitude("");
    }
  }
  // console.log(data.main.temp);
  console.log(data);
  return (
    <div className="app">
      <div className="search-box">
        <div className="search">
          <input
            type="text"
            value={latitude}
            onChange={(event) => setLatitude(event.target.value)}
            placeholder="Enter Latitude"
            onKeyPress={SearchLocation}
          />
        </div>
        <div className="search">
          <input
            type="text"
            value={longtitude}
            onChange={(event) => setLongtitude(event.target.value)}
            placeholder="Enter Longtitude"
            onKeyPress={SearchLocation}
          />
        </div>
      </div>

      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ?
              <h1>{data.main.temp.toFixed()} °C</h1> : null
            }
          </div>
          <div className="description">
            {data.weather ?
              <p>{data.weather[0].main}</p> : null
            }
          </div>
        </div>
        {data.name !== undefined &&
          <div className="bottom">
            <div className="feels">
              {data.main ?
                <p className="bold">{data.main.feels_like.toFixed()} °C</p> : null
              }
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main ?
                <p className="bold">{data.main.humidity} %</p> : null
              }
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ?
                <p className="bold">{data.wind.speed} MPH</p> : null
              }
              <p>Wind Speed</p>
            </div>
          </div>
        }

      </div>
    </div>
  );
}

export default App;
