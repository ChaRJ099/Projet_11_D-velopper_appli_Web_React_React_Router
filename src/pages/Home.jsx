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
    <>
      <Header />
      <main className="home">
        <Slogan bannerUrl={bannerUrl}/>
        <Galery />
      </main>  
      <Footer />
    </>
          
  );
}

export default Home;
