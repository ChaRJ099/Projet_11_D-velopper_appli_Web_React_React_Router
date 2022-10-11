import "../styles/Card.css";

function Card(props) {
    return (
        <div className="card">
            <div className="card-img">PHOTO</div>
            <h3 className="card-title">{props.title}</h3>
        </div>
    );
  }
  
  export default Card;