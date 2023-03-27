import React, { useContext } from 'react'

import WeatherContext from '../context/WeatherContext'

const Today = () => {
    const { weather1 } = useContext(WeatherContext)
    // destructuring weather object
    const {
        name,
        main: { temp, temp_min, temp_max, feels_like, humidity },
        sys: { country },
        weather,

    } = weather1

    const icon = weather[0].icon

    const loaded = () => {

        return (

            <div>
                <div className="mainBox">

                    <h3>{name},{country}</h3>
                    <div className="today-info">
                        <div>
                            <h3>{Math.round(temp)}°F</h3>

                            <div className='mainBox-temp'>
                                <h4>Max {Math.round(temp_max)}°F</h4>
                                <h4>  Min {Math.round(temp_min)}°F</h4>
                            </div>

                        </div>
                        <div>
                            <img src={`https://openweathermap.org/img/w/${icon}.png`} alt="" className='image' />
                            <h4>{weather[0].main}</h4>
                        </div>
                        <div>


                            <h4>Feels like {Math.round(feels_like)}°F  </h4>
                            <h4>Humidity {humidity}</h4>
                        </div>
                    </div>
                </div>

            </div>



        );
    }
    const loading = () => {
        return <h1>No weather to display</h1>
    }

    return (
        <>
            {weather1 ? loaded() : loading()}
        </>


    )
}

export default Today