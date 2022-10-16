import "../styles/Footer.css";
import LogoFooter from "../assets/logo-blanc.png";

function Footer() {
    return (
    <footer className="footer">
      <div className="logo-footer">
        <img src={LogoFooter} alt="logo-footer" />
      </div>
      <p className="copyright">© 2020 Kasa. All rights reserved</p>
    </footer>);
  }
  
  export default Footer;