import "../styles/Card.css";
import { Link } from 'react-router-dom';

function Card(props) {
    return (
            <Link to={"/Details/"+props.id}>
                <div className="card">
                    <img src={props.cover} className="card-img" alt="cover"/>
                    <h3 className="card-title">{props.title}</h3>
                </div>
            </Link>  
    );
  }
  
  export default Card;