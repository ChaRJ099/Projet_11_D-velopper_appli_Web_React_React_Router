import Header from '../components/Header';
import Slider from '../components/Slider';
import Tag from '../components/Tag';
import Rate from '../assets/Rate.png';
import Dropdown from '../components/Dropdown';
import Footer from '../components/Footer';
import JSON from '../datas/logements.JSON';
import { useState, useEffect } from 'react';
import "../styles/Details.css";
import "../styles/Dropdowns.css";
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
                <section className="logement-infos">
                    <div className="bloc-title-tags">
                        <div className="bloc-title">
                            <h1 className="logement-title">{logements[index].title}</h1>
                            <span className="logement-location">{logements[index].location}</span>
                        </div>
                        <div className="bloc-tags">
                             {logements[index].tags.map((tag, index)=> {
                                return  <Tag tag={tag} key={index} id={index} />
                            })}
                        </div>
                    </div>
                    <div className="bloc-host-rating">
                        <div className="bloc-host">
                            <span className="host-name">{logements[index].host.name}</span>
                            <img className="host-portrait" src={logements[index].host.picture} alt="Rate" />
                        </div>
                        <div className="bloc-rate">
                            <img src={Rate} alt="Rate" />
                        </div>
                    </div>                        
                </section> 
                <section className="details-dropdown">
                    <Dropdown title={"Description"} key={index} description=<span>{logements[index].description}</span> id={1} />                                 
                    <Dropdown title={"Equipements"} key={index} description={logements[index].equipments.map((equipment)=> {
                                return  <span className="equipment-item">{equipment}</span>
                            })} id={2} />                                 
                </section>
            <Footer />
            </div>      
        );      
                
    }
}

  
export default Details;