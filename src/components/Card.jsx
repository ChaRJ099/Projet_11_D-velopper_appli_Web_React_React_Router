import "../styles/Card.css";

function Card(props) {
    return (
        <div className="card">
            <img src={props.cover} className="card-img" alt="cover"/>
            <h3 className="card-title">{props.title}</h3>
        </div>
    );
  }
  
  export default Card;