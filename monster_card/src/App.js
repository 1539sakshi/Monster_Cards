import logo from './logo.svg';
import './App.css';
import SearchBox from './components/SearchBox';
import Card from './components/Card';
import CardLis from './components/CardLis';
import { useState, useEffect } from 'react';

function App() {
  const [monsters, setmonsters] = useState([{name:'sak'}]);
  const [searchField, setsearchField] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json()).then(data=>setmonsters(data))
  },[]);

  const searching = event => {
    setsearchField(event.target.value);
  };

  const filteredMonsters = monsters.filter(monster =>
    monster.name.toLowerCase().includes(searchField.toLowerCase())
    )

  return (
    <div className="App">
      <h1>Monters</h1>
      <SearchBox searching = {searching} />
      <CardLis monsters ={filteredMonsters} />
    </div>
  );
}

export default App;
