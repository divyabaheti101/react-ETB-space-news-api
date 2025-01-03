import React, { useState } from "react";

function App() {
  const [flights, setFlights] = useState([
    {flight_number: 1,
      mission_name: 'Mission 1'
    }, 
    {flight_number: 2,
      mission_name: 'Mission 2`'
    }
  ])
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
