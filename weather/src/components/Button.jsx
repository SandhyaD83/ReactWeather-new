import React, { useContext } from 'react'

import WeatherContext from '../context/WeatherContext'

const Button = (props) => {
    const { getForecast } = useContext(WeatherContext)
    const buttonClick = () => {
        getForecast(props.txt);
    }

    return (
        <>
            <button className="btn" onClick={buttonClick} ><h4>{props.txt}</h4></button>
        </>
    )
}

export default Button
