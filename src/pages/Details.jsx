import Header from '../components/Header';
import Carrousel from '../components/Carrousel';
import Rate from '../assets/Rate.png';
import Footer from '../components/Footer';
import "../styles/Details.css";

function Details() {
    
    return (    
        <div className="details">
          <Header />
          <Carrousel />
          <section className="logement-description">
            <div className="bloc-title">
                <h1 className="logement-title">Cozy loft on the Canal Saint-Martin</h1>
                <span className="logement-location">Paris, Île-de-France</span>
            </div>
            <div className="bloc-tags-rate">
                <div className="bloc-tags">
                    <span className="tag">Cosy</span>
                    <span className="tag">Canal</span>
                    <span className="tag">Paris 10</span>
                </div>                    
                <div className="bloc-rate">
                    <img src={Rate} alt="Rate" />
                </div>
            </div>
            <div className="logement-details">
                <div>Description</div>
                <div>Equipements</div>
            </div>
            
          </section>
          <Footer />
        </div>      
    );
  }
  
  export default Details;