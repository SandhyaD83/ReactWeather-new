# Weather App

This Weather app is built using HTML,CSS,JavaScript and React and downloads data from openweathermap using Api key

## Description

This app will provide current day's,3 hour,5 days and weekend weather information based on the City (which will be the use input)

## Design
1. Components used in the app are Today,Hourly,Daily,Weekend,Search,Header and Button
2. Built the app using react functional components with hooks to handle state and other life cycle methods
3. Created WeatherContext.jsx which will take care of loading the initial state, data communication and also handles how the data gets propagated to various components.
4. Initially the application renders the weather information of New York city(which is passed to the url through useEffect())
