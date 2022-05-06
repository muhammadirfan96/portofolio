// import logo from './logo.svg';
// import './App.css';
import Card from "./components/Card";
import Heroku from "./components/Heroku";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div className="container mx-auto px-4">
      <div className="flex justify-center">
        <div className="m-2">
          <Heroku />
        </div>
      </div>
      <div className="md:columns-3 flex justify-center">
        
        <div className="m-2">
          <Card />
        </div>
        <div className="m-2">
          <Card />
        </div>
        <div className="m-2">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
