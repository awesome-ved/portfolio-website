import './App.css';
import page1 from "./Ved_Vadake_Resume_page-0001.jpg";
import page2 from "./Ved_Vadake_Resume_page-0002.jpg";
import profile from "./Ved_Vadake_Photo.jpeg";
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
      <header className='header'>
        <div className='header-portfolio-holder'>
          <h1 className='header-portfolio-holder-text'>Portfolio</h1>
        </div>
      </header>
      <div className='container'>
        <div className='page-doc'>
          <div className='page-doc_sidebar'>
            <div class="mgd-sidebar">
              <div class="mgd-sidebar__group">
                <ul class="mgd-sidebar__body">
                  <li class="mgd-sidebar__item">
                    <img src={profile} alt='profile_image' className='prof_img'></img>
                  </li>
                  <li class="mgd-sidebar__item">
                    <h2>Ved Vadake</h2>
                  </li>
                  <li class="mgd-sidebar__item">
                  <button id="mgd-sideBaritem-save_button"onClick={()=>{downloadFileAtURL(PDF_URL)}}>Save the Resume</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='page-doc_content'>
            <div className='page-doc_content-image_list'>
              <img src={page1} alt='page1' className='page-doc_content-pages' id='page1'></img>
              <img src={page2} alt='page2' className='page-doc_content-pages' id='page2'></img>
            </div>
          </div>
        </div>
      </div>
      <footer className='footer'>
        <p>Visit My <button className="linkedin">LinkedIN</button> or <button className="github">Github</button></p>
      </footer>
    </div>
  );
}



export default App;