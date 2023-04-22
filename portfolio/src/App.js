// import logo from './logo.svg';
import profileLogo from './Ved_Vadake_Photo.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Portfolio Resume</p>
      </header>
      <section>
        <nav className='App-Nav'>
          <img src={profileLogo} className="App.logo" alt="logo"></img>
          <h1>Ved Vadake</h1>
          <button>Save the Resume</button>
        </nav>
        <article>
          <h1>Resume</h1>
        </article>
      </section>
    </div>
  );
}

export default App;


/* <div className="App">
      <header className="App-header">
        <img src={profileLogo} className="App-logo" alt="logo" />
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
    </div> */