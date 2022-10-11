import "../styles/Header.css";
import "../styles/Menu.css";
import Logo from "../assets/LOGO.png";

function Header() {
    return (
    <header className="header-group">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <nav className="menu">
        <ul className="menu-list">
          <li className="menu-list-item">Accueil</li>
          <li className="menu-list-item">A Propos</li>
        </ul>
      </nav>
    </header>);
  }
  
  export default Header;