import { useRouteError } from "react-router-dom";
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import ErrorImg from '../assets/404.png';


function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <Header />
      <div className="logo">
        <img src={ErrorImg} alt="erreur 404" />
      </div>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <p><Link to="/">Retourner sur la page d’accueil</Link></p>
    </div>
  );
}

export default ErrorPage;