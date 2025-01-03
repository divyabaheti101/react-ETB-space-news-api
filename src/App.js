import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [flights, setFlights] = useState([])

  useEffect(() => {
    //get request to fetch data from api
    axios.get('https://api.spacexdata.com/v2/launches')
    .then((res) => {
      setFlights(res.data)
    })
    .catch((err) => {
      console.log('Error while fetching data from api: ', err)
    })
  }, [])

  return (
    <ul>
      {flights.map((flight) => (
        <li key={flight.flight_number}>
          <h2>{flight.mission_name}</h2>
          <p>Flight Number: {flight.flight_number}</p>
        </li>
      ))}
    </ul>
  );
}

export default App;
