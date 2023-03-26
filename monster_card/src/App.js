import logo from './logo.svg';
import './App.css';
import SearchBox from './components/SearchBox';
import Card from './components/Card';
import CardLis from './components/CardLis';

function App() {
  return (
    <div className="App">
      <h1>Monters</h1>
      <SearchBox/>
      <CardLis/>
    </div>
  );
}

export default App;
