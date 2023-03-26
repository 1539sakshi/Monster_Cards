import logo from './logo.svg';
import './App.css';
import SearchBox from './components/SearchBox';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <h1>Monters</h1>
      <SearchBox/>
      <Card/>
    </div>
  );
}

export default App;
