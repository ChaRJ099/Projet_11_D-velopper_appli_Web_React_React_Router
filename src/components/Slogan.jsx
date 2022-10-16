import "../styles/Slogan.css";
import homeBanner from "../assets/paysage.png";
import infoBanner from "../assets/LOGO.png";
/* eslint-disable */


function Slogan({bannerUrl}) {

  function setBanner() {
    const URL = window.location.pathname;

    switch(URL){
      case '/' : return bannerUrl = homeBanner;
      break;

      case '/Apropos' : return bannerUrl = infoBanner;
      break;

      default : return bannerUrl = homeBanner;
    }
  }

  setBanner();


  return (
    
    <section className="slogan-group">
      <img src={bannerUrl}/>
      <div className="slogan-filtre"></div>
      <h1 className="slogan-group-title">Chez vous, partout et ailleurs</h1>
    </section>
  );
}

export default Slogan;