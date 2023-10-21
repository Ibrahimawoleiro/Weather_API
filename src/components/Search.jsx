import { useState } from 'react'


function Search(props) {
    const [count, setCount] = useState(0)

    const start = () =>{

    }

    return (
        <div className='Search'>
            <div>
                <label htmlFor="searcher">Search city:  </label>
                <input type="text" name="search" id="searcher" placeholder='Search by city,State' />
                <button id='starter' onClick={props.getWeather}>Search</button>
            </div>
            
            <div>
                <label htmlFor="filter">Filter by temperature:  </label>
                <input type="text" name="filter" id="filter" placeholder='Filter by temperature'/>
                <button id='filtering' onClick={start}>Filter</button>
            </div>

        </div>
    )
}

export default Search
