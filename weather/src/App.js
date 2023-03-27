
import './App.css';

import Search from './components/Search'
import Today from './components/Today'
import Button from './components/Button';
import Daily from './components/Daily';
import Weekend from './components/Weekend';
import { useContext } from 'react'
import Hourly from './components/Hourly';

import WeatherContext from './context/WeatherContext';
import Header from './components/Header';




function App() {

  const { weather1, str } = useContext(WeatherContext)
  return (
    <div className="App">
      <Header />
      <Search />
      {weather1.main ? <Today /> : null}

      <Button txt="Hourly" />
      <Button txt="Daily Weather" />
      <Button txt="Weekend" />

      {str === "Hourly" ? (<Hourly />) : null}
      {str === "Daily Weather" ? (<Daily />) : null}
      {str === "Weekend" ? (<Weekend />) : null}






    </div>
  );
}

export default App;
