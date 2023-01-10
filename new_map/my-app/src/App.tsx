import React, {useState} from 'react';
import NewComponent from "./NewComponent";

function App() {
  const topCars = [
    {manufacturer: 'BMW', model: 'X5'},
    {manufacturer: 'Mersedes', model: 'MLS'},
    {manufacturer: 'Audi', model: 'Q7'}
  ]

  return (
      <NewComponent topCars={topCars} />
  );
}

export default App;
