import "../styles/Dropdowns.css";
import "../styles/helpers.css";
import iconeAngle from "../assets/angle-down.png";

function Dropdown(props) {

  function toogleButton() {
    const dropdownContent = document.querySelector(".dropdown-text-content-"+props.id);
    // console.log('dropdownContent', dropdownContent);
    dropdownContent.classList.toggle("dropdown-text-content--expanded");
    // console.log('toogleButton');
  }

   
  return (
    <div className="dropdown">
      <div className="dropdown-title-content">
      <span className="dropdown-title">{props.title}</span>
      <button className="button-icon" onClick={toogleButton}>
        <img src={iconeAngle} className="icone-angle" alt="icone bouton" />
      </button>
      </div>
      
      <div className={"dropdown-text-content dropdown-text-content-"+props.id}>
        <span className="dropdown-text">{props.description}</span>
      </div>
    </div>
  );

}

export default Dropdown;