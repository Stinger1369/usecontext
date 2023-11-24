import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Slider from 'react-slick';
import './PagesStyle/Modal.css';
import useContextImage from '../assets/images/useContext.png';
import appProvider from '../assets/images/appProvider.png';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function ContextModal({ show, handleClose }) {
  // Configuration pour React Slick
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
<Modal show={show} onHide={handleClose} className="custom-modal">
      <Modal.Header>
        <Modal.Title>Exploration de useContext</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Slider {...settings} className="slider-container">
          <div className="slick-slide">
          <h3>Introduction à useContext</h3>
  <p>
    useContext est un hook React qui permet de gérer et d'accéder à l'état global 
    d'une application de manière simplifiée. Il évite le "prop drilling" (passage 
    des props à travers plusieurs niveaux de composants).
  </p>
          </div>
          <div className="slick-slide">
  <h3>Création d'un Context</h3>
  <p>
    Pour utiliser useContext, commencez par créer un contexte avec React.createContext().
    Exemple : <br />
    <code>const MonContexte = React.createContext(valeurInitiale);</code>
  </p>
          </div>
          <div className="slick-slide">
  <h3>Utilisation du Provider</h3>
  <p>
    Enveloppez vos composants avec le Provider du contexte pour leur fournir les données.
    Exemple : <br />
    <code>
      MonContexte.Provider value=&#123;&#123;donnée&#125;&#125;<br />
      MonComposant;<br />
      MonContexte.Provider;
    </code>
  </p>
</div>

          <div className="slick-slide">
  <h3>Accès aux données avec useContext</h3>
  <p>
    Accédez aux données du contexte dans les composants enfants en utilisant le hook useContext.
    Exemple : <br />
    <code>const valeur = useContext(MonContexte);</code>
  </p>
</div>
<div className="slick-slide">
  <h3>Exemple Complet</h3>
  <p>
    Voici un exemple complet montrant la création d'un contexte, l'utilisation du Provider, 
    et l'accès aux données dans un composant enfant. <br />
  </p>
  <div className="code-example">
  <img src={useContextImage} alt="Exemple d'utilisation de useContext" />
  <img src={appProvider} alt="Exemple d'utilisation de useContext" />
  </div>

</div>
     
        </Slider>
      </Modal.Body>
      <Modal.Footer>
  <Button variant="secondary" onClick={handleClose} className="close-modal-button">
    Fermer
  </Button>
</Modal.Footer>
    </Modal>
  );
}

export default ContextModal;
