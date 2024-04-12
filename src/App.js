import logo from './logo.svg';
import './App.css';

function App() {

  fetch("https://localhost:3000/")
      .then(res => {
        return res.json()
      })
      .then(data => console.log(data))

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World
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
