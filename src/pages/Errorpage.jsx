import { useRouteError } from "react-router-dom";
import { Link } from 'react-router-dom';
import '../styles/Errorpage.css';
import Header from '../components/Header';
import Footer from '../components/Footer';


function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="error-page">
      <Header />
      <section className="error404">
        <div className="error-num-container">
          <span className="error-num">404</span>
        </div>      
        <span className="error-msg">Oups ! La page que vous demandez n'existe pas.</span>
        <span className="link-back-home"><Link to="/">Retourner sur la page d’accueil</Link></span>
      </section>
      <Footer />
    </div>
  );
}

export default ErrorPage;