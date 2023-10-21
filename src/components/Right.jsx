import { useEffect, useState } from 'react'
import Search from './Search';
import Tablee from './Tablee';
function Right() {
  const [holder, setholder] = useState(0);
  
  const [Data, setData] = useState({
    data:[],
    city_name:"",
    country_code:""
  })

  async function getWeather() {
    const response = await fetch("https://api.weatherbit.io/v2.0/history/daily?postal_code=27601&&city=Miami,FL&country=US&start_date=2023-10-16&end_date=2023-10-25&key=c50c43fd06e645b99082bf3b068a094b");
    const weather = await response.json();
    console.log(weather.data[0].clouds);

    setholder({
      data: weather.data,
      city_name: weather.city_name,
      country_code: weather.country_code
    })

    
  }

  useEffect(() => {
    setTimeout(() => {
      setData(holder)

    }, 1000);

  });





  return (
    <div className='Right'>
      <div className='first grid-item' >
      { Data.city_name ? (
        <h1 className="date">
          {Data.city_name} <br></br>
          {Data.city_name}, {Data.country_code}
        </h1>
      ) : (
        <p></p>
      )}
      </div>
      <div className='second grid-item'></div>
      <div className='third grid-item'></div>
      <div className='fourth grid-item'>
        <Search getWeather={getWeather} ></Search>
        <Tablee Data={Data}></Tablee>
      </div>
    </div>
  )
}

export default Right
