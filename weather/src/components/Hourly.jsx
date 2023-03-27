import React, { useState, useContext } from 'react'
import WeatherContext from '../context/WeatherContext'


const Hourly = () => {
    const { forecast } = useContext(WeatherContext)
    console.log(forecast.list)
    //mapping through the list array and destructuring it
    const dailyReport = forecast.list.map(({ dt_txt, main: { temp }, weather, wind: { speed } }, id) => {

        const date = new Date(dt_txt.split(' ')[0]).toDateString();

        // splits and only takes time from dt_txt and converts string to whole number 
        const time = parseInt(dt_txt.split(' ')[1], 10);

        return (
            <div className="weatherDetails">
                <div className='date-temp'>
                    <h4>{date}</h4>
                    {time > 12 ? (<h4>{time - 12}pm</h4>) : time === 0 ? (<h4>12am</h4>) : time === 12 ? (<h4>12pm</h4>) : (<h4>{time}am</h4>)}
                    <h4>{temp.toFixed()}°F</h4>
                </div>
                <div className='weather'>
                    <img src={`https://openweathermap.org/img/w/${weather[0].icon}.png`} alt="" className='weather-image' />
                    <h4>{weather[0].main}</h4>
                </div>
                <div className='wind'>
                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/weather/wind-icon.png" alt="" className='wind-image' />
                    <h4>{speed.toFixed()} mph</h4>
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

export default Hourly