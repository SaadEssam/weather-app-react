import React from 'react'
import "./current-weather.css"

const currentWeather = ({props}) => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{props.city}</p>
          <p className="weather-description">{props.weather[0].description}</p>
        </div>
        <img alt="weather" className="weather-icon" src={`icons/${props.weather[0].icon}.png`} />
      </div>
      <div className="bottom">
        <p className="temperature">{Math.round(props.main.temp)}°C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">{Math.round(props.main.feels_like)}°C</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">{props.wind.speed} m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">{props.main.humidity}%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">{props.main.pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  )
}


export default currentWeather