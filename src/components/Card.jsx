import "../styles/Card.css";
import { Link } from 'react-router-dom';

function Card(props) {
    return (
            <Link to={"/Details/"+props.id}>
                <div className="card">
                    <div className="card-img-container">
                        <img src={props.cover} className="card-img" alt="cover"/>
                    </div>
                    <h3 className="card-title">{props.title}</h3>
                </div>
            </Link>  
    );
  }
  
  export default Card;