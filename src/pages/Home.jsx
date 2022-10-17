// import logo from './logo.svg';
import '../styles/Home.css';
import Header from '../components/Header';
import Slogan from '../components/Slogan';
import Galery from '../components/Galery';
import Footer from '../components/Footer';
import { useState } from 'react';

function Home() {
  
  const [bannerUrl] = useState([]);

  return (    
      <div className="home">
        <Header />
        <Slogan bannerUrl={bannerUrl}/>
        <Galery />
        <Footer />
      </div>      
  );
}

export default Home;
