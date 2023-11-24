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
            <p>useContext est un hook React qui permet de gérer l'état global d'une application...</p>
          </div>
          <div>
            <h3>Création d'un Context</h3>
            <p>Utilisez React.createContext pour créer un nouveau contexte...</p>
          </div>
          <div>
            <h3>Utilisation du Provider</h3>
            <p>Le Provider permet de passer des données à tous les composants enfants...</p>
          </div>
          <div>
            <h3>Accès aux données avec useContext</h3>
            <p>Le hook useContext permet d'accéder aux données du contexte dans les composants enfants...</p>
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
