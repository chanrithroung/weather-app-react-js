import Header from "./components/Header";
import Main from './components/Main'
import { useState } from "react";
const App = () => {

  const [weather, setWeather] = useState({});
  const [temp, setTemp] = useState(true);

  const api = {
    key: "4f2773bd9bc9888901dcb54a69a8202e",
    base: "https://api.openweathermap.org/data/2.5/"
  }

  const searchPressed = (search) => {
      fetch(`${api.base}weather?q=${search}&units=matric&APPID=${api.key}`)
      .then(res => res.json()).then(res => {setWeather(res)});
  }

  const temperature = (temp) => setTemp(temp);

  const isEmpty = (weather) => Object.keys(weather).length == 0;


  const finallTemp = () => {
    const singn = temp ? `°F` : `°C`;
    return isEmpty(weather) ? [0+singn,0+singn]: [(temp ? weather.main.temp.toFixed(2) + singn: ((weather.main.temp - 32) * 5/9).toFixed(2) + singn), temp ? weather.main.temp_min + singn : ((weather.main.temp_min - 32) * 5/9).toFixed(2) + singn]
  }
  
  return <>
    <div className="container">
      <Header searchPressed={searchPressed} temp={temperature} />
      <Main cityname={weather.name} temperatrue={finallTemp()[0]} cloudsCondition={isEmpty(weather) ? 0 : weather.clouds.all} lowTemperature={finallTemp()[1]}/>
    </div>
  </>
}


export default App;