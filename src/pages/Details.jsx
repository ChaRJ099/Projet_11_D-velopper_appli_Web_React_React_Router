import Header from '../components/Header';
import Slider from '../components/Slider';
import Rate from '../assets/Rate.png';
import Footer from '../components/Footer';
import JSON from '../datas/logements.JSON';
import { useState, useEffect } from 'react';
import "../styles/Details.css";
import { useParams } from 'react-router-dom';

function Details() {
    const index = useParams().id;
    const [logements, setLogement] = useState([]);
    const [isLoaded, setLoaded] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        fetch(JSON)
        .then(result => result.json())
        .then(
            (result) => {
                setLoaded(true);
                setLogement(result);
            },
            (error) => {  
                setError(error);
            }
        )
    }, [])

    if (error) {
        return <div>Impossible de récupérer les infos: {error.message}</div>
    } else if  (!isLoaded) {
        return <div>...Chargement de la page</div>
    } else {
        return (    
            <div className="details">
                <Header />
                <Slider />
                <section className="logement-description">
                    <div className="bloc-title">
                        <h1 className="logement-title">{logements[index].title}</h1>
                        <span className="logement-location">{logements[index].location}</span>
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
}
  
export default Details;