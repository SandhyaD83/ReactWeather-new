import { createContext, useState, useEffect } from 'react'
const WeatherContext = createContext({});
export const Provider = ({ children }) => {
    //defining a Array variable to store weather data
    const [weather1, setWeather1] = useState({})

    const apiKey = "77d6cae8ed4f306976db5aa9ea844e15"
    //function to fetch data from weather using api and store it in the variable weather
    const getWeather = async (searchTerm) => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=${apiKey}&units=imperial`)
            const data = await response.json();
            console.log(data)
            setWeather1(data)
            setStr("nothing")
        }
        catch (e) {
            console.error(e)
        }

    }
    console.log(weather1)

    const [str, setStr] = useState('')
    const [forecast, setForecast] = useState({})
    //function to fetch daily forecast of the selected city using lat and lon values
    const getForecast = async (btnName) => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${weather1.coord.lat}&lon=${weather1.coord.lon}&appid=${apiKey}&units=imperial`)
            const forecastData = await response.json();
            console.log(forecastData)
            setForecast(forecastData)

            setStr(btnName)
        }
        catch (e) {
            console.error(e)
        }

    }
    //Intially renders London weather
    useEffect(() => { getWeather("london"); }, [])
    console.log(forecast)
    // creating an empty array to store date and min ,max temps of same day
    const result = []
    console.log(result)
    const findMinMax = () => {
        forecast.list.forEach(l => {
            const date = new Date(l.dt_txt.split(' ')[0]).toDateString();
            // finding index of result array when date from result array is equal to date from list array of api
            const index = result.findIndex(item => item.date === date)
            //pushing data into the result if it doesn't match 
            if (index === -1) {
                result.push({
                    date: date,
                    min: l.main.temp_min,
                    max: l.main.temp_max,
                    image: l.weather[0].icon,
                    weather: l.weather[0].main,
                    speed: l.wind.speed
                });
            }
            else {
                if (l.main.temp_min < result[index].min) {
                    result[index].min = l.main.temp_min;
                }
                if (l.main.temp_max < result[index].max) {
                    result[index].max = l.main.temp_max;
                }

            }
        })

        console.log(result)
        return result;
    }



    return (
        <WeatherContext.Provider value={{ weather1, str, forecast, getWeather, getForecast, findMinMax, result }} >
            {children}
        </WeatherContext.Provider>

    )

}
export default WeatherContext;