import React, { useState, useContext } from 'react'
import WeatherContext from '../context/WeatherContext'

const Daily = (props) => {
    const { findMinMax, result } = useContext(WeatherContext)
    //calling function from WeatherContext.jsx
    findMinMax();
    //mapping through the result array which is from WeatherContext.jsx
    const dailyReport = result.map((r) => {
        return (

            <div className="weatherDetails">
                <div className='date-temp'>
                    <h4>{r.date}</h4>
                    <h3>{r.max.toFixed()}°F</h3>
                    <h3>{r.min.toFixed()}°F</h3>
                </div>
                <div className='weather'>
                    <img src={`https://openweathermap.org/img/w/${r.image}.png`} alt="" className='weather-image' />
                    <h4>{r.weather}</h4>
                </div>
                <div className='wind'>
                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/weather/wind-icon.png" alt="" className='wind-image' />
                    <h4>{r.speed.toFixed()} mph</h4>
                </div>

            </div>
        )

    })

    return (
        < div >
            {dailyReport}
        </div >
    )




}

export default Daily