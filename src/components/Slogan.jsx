import "../styles/Slogan.css";
import homeBanner from "../assets/paysage.png";
import infoBanner from "../assets/kalen-emsley.png";
/* eslint-disable */


function Slogan({bannerUrl, title}) {

  function setBanner() {
    const URL = window.location.pathname;

    switch(URL){
      case '/' :
        return (
          bannerUrl = homeBanner,
          title = "Chez vous, partout et ailleurs"
        )
      break;

      case '/Apropos' : 
        return (
          bannerUrl = infoBanner,
          title = ""
        )
      break;

      default : return bannerUrl = homeBanner;
    }
  }

  setBanner();


  return (
    
    <section className="slogan-group slogan-about">
      <h1 className="slogan-group-title">{title}</h1>
      <div className="slogan-filtre">
        <div className="slogan-backdrop"></div>
        <img className="slogan-img" src={bannerUrl}/>  
      </div>
          
    </section>
  );
}

export default Slogan;