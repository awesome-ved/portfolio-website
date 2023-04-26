import './App.css';
import strings from './res/strings'
import images from './res/images'
const PDF_URL = "./pdf/Ved_Vadake_Resume.pdf";
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
      <header className='header'>
        <div className='header-portfolio-holder'>
          <h1 className='header-portfolio-holder-text'>{strings.heading}</h1>
        </div>
      </header>
      <div className='container'>
        <div className='page-doc'>
          <div className='page-doc_sidebar'>
            <div class="mgd-sidebar">
              <div class="mgd-sidebar__group">
                <ul class="mgd-sidebar__body">
                  <li class="mgd-sidebar__item">
                    <img src={images.profile} alt='profile_image' className='prof_img'></img>
                  </li>
                  <li class="mgd-sidebar__item">
                    <h2>{strings.name}</h2>
                  </li>
                  <li class="mgd-sidebar__item">
                  <button id="mgd-sideBaritem-save_button" onClick={()=>{downloadFileAtURL(PDF_URL)}}>{strings.download}</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='page-doc_content'>
            <div className='page-doc_content-image_list'>
              <img src={images.page1} alt='page1' className='page-doc_content-pages' id='page1'></img>
              <div className='page-doc_content-page_break'></div>
              <img src={images.page2} alt='page2' className='page-doc_content-pages' id='page2'></img>
            </div>
          </div>
        </div>
      </div>
      <footer className='footer'>
        <p>
          Visit My 
          <button className="GOTOLINK LinkedIN" id='LinkedIn'>
            <a class="link" href="https://www.linkedin.com/in/ved-vadake-/" target="_blank" rel="noreferrer">LinkedIn</a>
          </button> 
          or 
          <button className="GOTOLINK Github" id='Github'>
            <a class="link" href="https://github.com/awesome-ved" target="_blank" rel="noreferrer">Github</a>
          </button>
        </p>
      </footer>
    </div>
  );
}

export default App;