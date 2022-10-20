// import '../styles/Apropos.css';
import Header from '../components/Header';
import Slogan from '../components/Slogan';
import Dropdown from '../components/Dropdown';
import Footer from '../components/Footer';
import "../styles/About.css";
import JSON from '../datas/about.JSON';
import { useState, useEffect } from 'react'; 

function About() {
  const [bannerUrl] = useState([]);

  const [about, setAbout] = useState([]);
    const [isLoaded, setLoaded] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        fetch(JSON)
        .then(result => result.json())
        .then(
            (result) => {
                setLoaded(true);
                setAbout(result);
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
        <div className="about">
        <Header />
        <Slogan bannerUrl={bannerUrl} />
        <div className="dropdown-list">
        {about.map((dropdown, index)=> {
          return  <Dropdown title={dropdown.title} key={index} description={dropdown.description} id={index} />
        })}
    </div>
        <Footer />
      </div> 
    )
    }
}

export default About;