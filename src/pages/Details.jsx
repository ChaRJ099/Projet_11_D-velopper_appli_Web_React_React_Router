import Header from '../components/Header';
import Slider from '../components/Slider';
import Tag from '../components/Tag';
import Rating from '../components/Rating';
import Dropdown from '../components/Dropdown';
import Footer from '../components/Footer';
import JSON from '../datas/logements.JSON';
import { useState, useEffect } from 'react';
import "../styles/Details.css";
import "../styles/Dropdowns.css";
import { useParams } from 'react-router-dom';

function Details() {
    const ID = useParams().id;
    const [logements, setLogement] = useState([]);
    const [isLoaded, setLoaded] = useState(false);
    const [error, setError] = useState();
    // const [pictures, setPictures] = useState([]);

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
        // setPictures(logements[index].pictures)
        return (    
            <div className="details">
                <Header />
                <Slider />
                <section className="logement-infos">
                    <div className="bloc-title-tags">
                        <div className="bloc-title">
                            <h1 className="logement-title">{logements[ID].title}</h1>
                            <span className="logement-location">{logements[ID].location}</span>
                        </div>
                        <div className="bloc-tags">
                             {logements[ID].tags.map((tag, index)=> {
                                return  <Tag tag={tag} key={index} id={index} />
                            })}
                        </div>
                    </div>
                    <div className="bloc-host-rating">
                        <div className="bloc-host">
                            <span className="host-name">{logements[ID].host.name}</span>
                            <img className="host-portrait" src={logements[ID].host.picture} alt="Rate" />
                        </div>
                        <Rating stars={logements[ID].rating} key={logements[ID].rating} />
                    </div>                        
                </section> 
                <section className="details-dropdown">
                    <Dropdown title="Description" description={logements[ID].description} id="1" key="1"/>                                 
                    <Dropdown title="Equipements" id="2" key="2" description={logements[ID].equipments.map((equipment, index)=> {
                                return <span className="equipment-item" key={equipment[index]}>{equipment}</span>
                            })} />                                 
                </section>
            <Footer />
            </div>      
        );      
                
    }
}

  
export default Details;