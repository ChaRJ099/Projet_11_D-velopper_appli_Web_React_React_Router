// import '../styles/Apropos.css';
import Header from '../components/Header';
import Slogan from '../components/Slogan';
import DropdownList from '../components/Dropdownlist';
import Footer from '../components/Footer';
import "../styles/About.css";
import { useState } from 'react'; 

function About() {
  const [bannerUrl] = useState([]);

    return (
        <div className="about">
        <Header />
        <Slogan bannerUrl={bannerUrl} />
        <DropdownList />
        <Footer />
      </div> 
    )
}

export default About;