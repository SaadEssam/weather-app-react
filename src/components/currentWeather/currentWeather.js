import "./currentWeather.css"
import d01 from "../../assets/icons/d01.png"

const currentWeather = () => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">Cairo</p>
          <p className="weather-description">Sunny</p>
        </div>
        <img alt="weather" className="weather-icon" src={d01} />
      </div>
      <div className="bottom">
        <p className="temperature">14°C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">20°C</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">3 m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">15%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">15 hPa</span>
          </div>
        </div>
      </div>
    </div>
  )
}


export default currentWeather