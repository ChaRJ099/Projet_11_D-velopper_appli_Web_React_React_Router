import "../styles/Dropdowns.css";
import "../styles/helpers.css";
import iconeAngle from "../assets/angle-down.png";

function Dropdown(props) {

  function toogleButton() {
    const dropdownContent = document.querySelector(".dropdown-content-"+props.id);
    // console.log('dropdownContent', dropdownContent);
    dropdownContent.classList.toggle("dropdown-content--expanded");
    // console.log('toogleButton');
  }

   
  return (
    <div className="dropdown">
      <div className="dropdown-title-content">
      <p>{props.title}</p>
      <button className="button-icon" onClick={toogleButton}>
        <img src={iconeAngle} className="icone-angle" alt="icone bouton" />
      </button>
      </div>
      
      <div className={"dropdown-content dropdown-content-"+props.id}>
        <span>{props.description}</span>
      </div>
    </div>
  );

}

export default Dropdown;