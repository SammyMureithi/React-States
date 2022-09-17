import './App.css';
import Bulb from './Components/Bulb';
import Counter from './Components/Counter';

function App() {
  return (
    <div className="App">
      <Counter />
      <h1>Click to Switch fruits</h1>
      <Bulb/>
    </div>
  );
}

export default App;
