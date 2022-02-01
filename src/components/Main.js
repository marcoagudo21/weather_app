import React, { useEffect, useState } from "react";
import { useFetch } from "../Hooks/useFetch";
import imagenes from '../assets/imagenes'
export const Main = () => {
  const [weather, setWeather] = useState("");
  const api = {
    key: "89fb0cd7e21e02d41a5cf3946c751006",
    base: `https://api.openweathermap.org/data/2.5/`,
  };
const dateBuilder = (d) => {
  let months = ["January", "February", "March", "April", "May", "June", "July", "Agost", "September", "October", "November", "December"];
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let day = days[d.getDay()]
  let date = d.getDate();
  let month =months[d.getMonth()];
  let year = d.getFullYear();
  return `${day} ${date} ${month} ${year}`
}
  const [location, setLocation] = useState("");

  const handlerInputChange = (e) => {
    setLocation(e.target.value);
  };
  const [clima, setClima] = useState('');
  const search = evt => {
    if(evt.key === 'Enter'){
      fetch(`${api.base}weather?q=${location}&units=metric&APPID=${api.key}`)
      .then(rest => rest.json())
      .then(result => {
        
        setWeather(result);
        setLocation('');
      console.log(result.weather);}
      
         )
         
         
    }

  }
  const sky = () => {
    if (weather !== 'undefined') {
     if (weather.weather[0].main === "Clouds") {
       setClima(imagenes.soleado)
     } else {
       
     }
    } else {
      return
    }
    
  } 
  
  
  
 
  return (
    <div className="Main">
      <div className="container">
        <div className="input_button_container">
          <input
            name="location"
            type="text"
            id="input"
            value={location}
            onChange={(e) => handlerInputChange(e)}
            placeholder="Enter a location"
            onKeyPress={search}
          />
        </div>
        <div className="weatherContainer">
          {typeof weather.main != 'undefined' ?
          <div className="weatherContainer2">
            <div className="location">{weather.name}, {weather.sys.country } </div>
            <div className="date">{dateBuilder(new Date())} </div>
            <div className="weather">{Math.round(weather.main.temp)}°C</div>
            {weather.weather[0].description == "overcast clouds" ? 
            <img src={imagenes.ntranqui} className="images" alt="" /> :
            '' }
            {weather.weather[0].description == 'broken clouds' ? 
            <img src={imagenes.soleado} className="images" alt="" /> :
            '' }
            {weather.weather[0].description == "clear sky" ? 
            <img src={imagenes.soleado} className="images" alt="" /> :
            '' }
            {weather.weather[0].description == "few clouds" ? 
            <img src={imagenes.soleado} className="images" alt="" /> :
            '' }
            {weather.weather[0].description == "light snow" ? 
            <img src={imagenes.nieve} className="images" alt="" /> :
            '' }
            {weather.weather[0].description == "light rain" ? 
            <img src={imagenes.nlluvia} className="images" alt="" /> :
            '' }
            {weather.weather[0].description == "moderate rain" ? 
            <img src={imagenes.nlluvia} className="images" alt="" /> :
            '' }
            
          </div>
          :
          <div className="error">
            <h1 className="error-text">Enter a location</h1>
          </div>

        }
        </div>
      </div>
    </div>
  );
};
