import Card from './Card';
import '../styles/Galery.css';




function Galery() {

  //@Todo a remplacer par objet json importé par fonction apiFetch
  let galeries = [
    {
      title: "Titre de la location 1",
    },
    {
      title: "Titre de la location 2",
    },
    {
      title: "Titre de la location 3",
    },
    {
      title: "Titre de la location 4",
    },
    {
      title: "Titre de la location 5",
    },
    {
      title: "Titre de la location 6",
    }
  ]


    return (
      <section className="gallerie">
        <h2>Gallerie</h2>
        <div className='cards-container'>
          {galeries.map((galerie, index)=> {
            return  <Card title={galerie.title} key={index}/>
          })}
        </div>
      </section>
    );
}
  
  export default Galery;