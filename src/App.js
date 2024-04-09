import logo from './logo.svg';
import './App.css';

function App() {

  fetch("https://api.mews-demo.com/api/connector/v1/configuration/get", {
    method: "POST", 
    headers: {
      "Content-type": "application/json"
    },
    body: {
        "ClientToken": "E0D439EE522F44368DC78E1BFB03710C-D24FB11DBE31D4621C4817E028D9E1D",
        "AccessToken": "7059D2C25BF64EA681ACAB3A00B859CC-D91BFF2B1E3047A3E0DEC1D57BE1382",
        "Client": "NameOfYourCompanyOrApplication"
    }
    
  })
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
