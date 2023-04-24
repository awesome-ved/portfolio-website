// import logo from './logo.svg';
import profileLogo from './Ved_Vadake_Photo.jpeg';
// import resume from './Ved_Vadake_Resume.pdf';
import './App.css';

const PDF_URL = "./Ved_Vadake_Resume.pdf";

function App() {
  const downloadFileAtURL=(url)=>{
    const fileName = url.split('/').pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download",fileName);
    document.body.appendChild(aTag) ;
    aTag.click();
    aTag.remove();
  }
  return (
    <div className="App">
      <div className="header">
        <p>Portfolio</p>
      </div>
      <div className="midcontent">
        <div className="profile">
          <img src={profileLogo} className="App.logo" alt="logo"></img>
          <h1>Ved Vadake</h1>
          <button onClick={()=>{downloadFileAtURL(PDF_URL)}}>Save the Resume</button>
        </div>
        <div className="pdf"></div>
      </div>
      <div className="footer">
        <p>Visit My <button className="linkedin">LinkedIN</button> or <button className="github">Github</button></p>
      </div>
    </div>
  );
}



export default App;


/* 

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
        <footer>
          <p>Footer</p>
        </footer>
      </section>
    </div>

<div className="App">
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