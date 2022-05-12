import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Dropdown } from 'primereact/dropdown';

const cities = [
  { name: 'New York', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'London', code: 'LDN' },
  { name: 'Istanbul', code: 'IST' },
  { name: 'Paris', code: 'PRS' }
];

function App() {
  const [city, setCity] = useState(cities[0]);

  return (
    <div className="App">
      <Dropdown
        optionLabel="name"
        value={city}
        options={cities}
        onChange={(e) => setCity(e.value)}
        placeholder="Select a City"
      />
    </div>
  );
}

export default App;
