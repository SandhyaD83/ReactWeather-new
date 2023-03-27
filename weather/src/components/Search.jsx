import React, { useState, useContext } from 'react'
import WeatherContext from '../context/WeatherContext'



const Search = () => {
    const { getWeather } = useContext(WeatherContext)
    //State to hold the data of our form
    const [formData, setFormData] = useState({ searchterm: "Enter City", })
    //handleChange - updates formData when we type into form
    const handleChange = (event) => {
        //use the event object to detect key and value to update
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }
    const handleClick = (event) => {
        //prevent page from refreshing on form submission
        event.preventDefault()
        //pass the search term to weathersearch prop, which calls getWeather function

        getWeather(formData.searchterm)

    }
    return (
        <div>
            {/* creating a form to give an input to search*/}
            <form className="form" onSubmit={handleClick}>
                <input type="text" name="searchterm" onChange={handleChange} value={formData.searchterm} className="form-search"></input>
                <input type="submit" value="submit" className='form-submit' />
            </form>

        </div>
    )
}

export default Search