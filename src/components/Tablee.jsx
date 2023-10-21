import { useState } from 'react'

function Tablee(props) {
    const [count, setCount] = useState(0)
    let holder = []

    props.Data ?
        props.Data.data.forEach((val) => {
            holder.push({
                date: val.datetime,
                temp: val.temp,
                cloud: val.cloud,
                pres: val.pres
            })
        }): 0
        
    return (
        <div className='Tablee'>
            <table border={10} style={{ width: "100%", marginTop: "20px" }}>
                <thead>
                    <tr>
                        <th>
                            Date
                        </th>
                        <th>
                            Temperature
                        </th>
                        <th>
                            Cloud
                        </th>
                        <th>
                            Pressure
                        </th>
                    </tr>
                </thead>
                <tbody>

                    <tr>
                        <th>

                        </th>
                        <th>

                        </th>
                        <th>

                        </th>
                        <th>

                        </th>
                    </tr>

                    {
                        holder.map((val) => {
                            <tr>
                                <th>
                                    {val.datetime}
                                </th>
                                <th>
                                    {val.temp}
                                </th>
                                <th>
                                    {val.cloud}
                                </th>
                                <th>
                                    {val.pres}
                                </th>
                            </tr>
                        })

                    }
                </tbody>



            </table>
        </div>
    )
}

export default Tablee
