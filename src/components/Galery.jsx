import Card from './Card';
import '../styles/Galery.css';
import JSON from '../datas/logements.JSON';
import { useState, useEffect } from 'react';


function Galery() {
  const [galerie, setGalerie] = useState([]);
  const [isLoaded, setLoaded] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    fetch(JSON)
      .then(result => result.json())
      .then(
        (result) => {
          setLoaded(true);
          setGalerie(result);
        },
        (error) => {  
          setError(error);
        }
      )

    }, [])


  //@Todo a remplacer par objet json importé par fonction apiFetch
  if (error) {
        return <div>Impossible de récupérer la galerie: {error.message}</div>
  } else if  (!isLoaded) {
    return <div>...Chargement de la galerie</div>
  } else {
    return (
      <section className="gallerie">
          {galerie.map((galerie, index)=> {
            return <Card cover={galerie.cover} title={galerie.title} key={index} id={index} />
          })}
      </section>
    );
  }



}
  
  export default Galery;