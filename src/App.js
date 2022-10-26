import logo, { ReactComponent as Image } from './logo.svg';
import './App.css';

function App() {
  const activateLasers = (event) => {
    console.log(event)
    event.target.style="fill:#66ff66"
  }
  return (
    <div className="App">
      <header className="App-header">
        <Image onClick={(event) => activateLasers(event)}/> 
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
