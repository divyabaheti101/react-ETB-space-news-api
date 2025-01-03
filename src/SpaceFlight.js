import axios from "axios";
import React, { useEffect, useState } from "react";
import './SpaceFlight.css';

function SpaceFlight(){
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
    <ul className="flights-list">
      {flights.map((flight) => (
        <li key={flight.flight_number}>
          <div className="flight-info">
            <img src={flight.links.mission_patch_small}
              alt={flight.mission_name} />
          </div>
          <div className="flight-data">
            <h2>{flight.mission_name}</h2>
            <p>Flight Number: {flight.flight_number}</p>
            <p>Launch Date: {flight.launch_date_utc}</p>
            <p>Flight Details: {flight.flight_details}</p>
            <p>Launch Location: {flight.launch_site.site_name}</p>
            <a href={flight.links.article_link}>Read more about this.</a>
          </div>
        </li>
      ))}
    </ul>
  );
}
export default SpaceFlight;