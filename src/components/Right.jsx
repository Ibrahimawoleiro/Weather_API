import { useEffect, useRef, useState } from 'react'
import Search from './Search';
import Tablee from './Tablee';
function Right() {
  const [holder, setholder] = useState(0);

  const input = useRef("Miami,FL");

  let filter = useRef(0)

  let datefilter = useRef("")

  const [Data, setData] = useState({
    data: [],
    city_name: "",
    country_code: "",
    time_zone:"",
    lat:""
  })

  async function getWeather(location,end_date) {
    console.log(end_date)
    const response = await fetch(`https://api.weatherbit.io/v2.0/history/daily?postal_code=27601&&city=${input.current}&country=US&start_date=${end_date ? end_date: "2023-10-16"}&end_date=${end_date ? "2023-10-17" : "2023-10-21"}&key=c50c43fd06e645b99082bf3b068a094b`);
    const weather = await response.json();
    console.log(weather);

    
    setholder({
      data: weather.data,
      city_name: weather.city_name,
      country_code: weather.country_code,
      timezone:weather.timezone,
      lat:weather.lat
    })


  }

  useEffect(() => {
    setTimeout(() => {
      setData(holder)
      console.log(holder)
    }, 1000);

  });





  return (
    <div className='Right'>
      <div className='first grid-item' >
        {Data.city_name ? (
          <h1 className="date">
            {Data.city_name} <br></br>
            <br />
            <span>{Data.city_name}, {Data.country_code}</span>
            
          </h1>
        ) : (
          <p></p>
        )}
      </div>
      <div className='second grid-item timezone'>
        {Data.timezone ? (
          <h1>
             TimeZone<br></br>
             <br />
             <span>{Data.timezone}</span>
             
          </h1>
        ) : (
          <p></p>
        )}</div>
      <div className='third grid-item'>
          {Data.lat ? (
            <h1>
               Latitude<br></br>
               <br />
               <span>{Data.lat}</span>
               
            </h1>
          ) : (
            <p></p>
          )}</div>
      <div className='fourth grid-item'>
        <Search getWeather={getWeather} input={input} filter={filter} datefilter ={datefilter}></Search>
        <Tablee Data={Data.data} filter={filter}></Tablee>
      </div>
    </div>
  )
}

export default Right