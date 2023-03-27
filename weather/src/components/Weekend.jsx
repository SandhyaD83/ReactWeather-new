import React, { useContext } from 'react'
import WeatherContext from '../context/WeatherContext'

const Weekend = () => {

    const { findMinMax, result } = useContext(WeatherContext)
    //calling function from WeatherContext.jsx
    findMinMax();
    //mapping through the result array which is from WeatherContext.jsx
    const dailyReport = result.map((r) => {
        const day = r.date.split(' ')[0]
        return (
            <div >
                {day === "Fri" || day === "Sat" || day === "Sun" ? (
                    <div className="weatherDetails">
                        <div className='date-temp'>
                            <h4>{r.date}</h4>
                            <h3>{r.max.toFixed()}°F</h3>
                            <h3>{r.min.toFixed()}°F</h3>
                        </div>
                        <div className='weather'>
                            <img src={`https://openweathermap.org/img/w/${r.image}.png`} alt="" className='image' />
                            <h3>{r.weather}</h3>
                        </div>
                        <div className='wind'>
                            <img src="https://uxwing.com/wp-content/themes/uxwing/download/weather/wind-icon.png" alt="" className='wind-image' />
                            <h3>{r.speed.toFixed()} mph</h3>
                        </div>
                    </div>
                ) : null}
            </div>

        );


    })

    return (

        < div >

            {dailyReport}

        </div >
    )
}


export default Weekend
