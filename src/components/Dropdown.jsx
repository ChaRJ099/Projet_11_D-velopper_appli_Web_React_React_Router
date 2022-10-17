import "../styles/Dropdowns.css";
import angleDown from "../assets/angle-down.png";

function Dropdown(props) {

   
      return (
        <div className="dropdown">
          <p>{props.title}</p>
          <img src={angleDown} className="angle-down" alt="angle down"/>
        </div>
      );
    
    }
    
    export default Dropdown;