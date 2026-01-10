import { useState } from "react"
import "./App.css"

function App() {
  const [city, setCity] = useState("")
  const [cityName, setCityName] = useState("Kathmandu")
  const [temps, setTemps] = useState([])
  const API_KEY = "ea15c9268a4c48b0bf3161849260901"
  function GetInfo() {
    if (!city) return alert("Please enter a city")
    setCityName(city)
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=7`)
      .then((res) => res.json())
      .then((data) => {
        const daily = data.forecast.forecastday
        setTemps(daily.map(day => Math.round(day.day.avgtemp_c)))
      })
  }
  return (
    <>
      <h2>7 DAYS WEATHER FORECAST</h2>
      <p>CITY</p>
      <input type="text" placeholder="Enter desired city" value={city} onChange={(e) => setCity(e.target.value)}/>
      <button onClick={GetInfo}>Enter</button>
      <p className="cityN">{cityName}</p>
      <div className="days">
        <div className="day1">Sunday: {temps[0]}°C</div>
        <div className="day2">Monday: {temps[1]}°C</div>
        <div className="day3">Tuesday: {temps[2]}°C</div>
        <div className="day4">Wednesday: {temps[3]}°C</div>
        <div className="day5">Thursday: {temps[4]}°C</div>
        <div className="day6">Friday: {temps[5]}°C</div>
        <div className="day7">Saturday: {temps[6]}°C</div>
      </div>
    </>
  )
}

export default App
