import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Slider from "react-slick";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ContextModal({show, handleClose}) {
    // configration de React Slicke
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        arrows: true,
        slidesToScroll: 1
    };
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Paris</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Slider {...settings}>
                    <div>
                        <h3>C’est quoi un Context dans React?</h3>
                        <p>L'API React Context, introduite dans React v.16.3, nous permet de passer des données à travers de notre components tree, leur donnant la possibilité de communiquer et de partager des données à différents niveaux.</p>
                    </div>
                    <div>
                        <h3>Prop Drilling - Le Gros Souci</h3>
                        <p>Les composants de React peuvent se voir passer des 'props'. 'Prop Drilling' est une situation dans laquelle les mêmes données sont envoyées à presque tous les niveaux en raison d'exigences au niveau final. Tout au long de la chaîne, tout peut aller de travers.
                            <ul>
                                <li>
                                Il pourrait y avoir une typo
                                </li>
                                <li>
                                Un 'refactoring' pourrait se produire dans les components intermédiaires
                                </li>
                                <li>
                                Nos props pourraient subir une mutation
                                </li>
                                <li>
                                Si nous supprimons un seul composant intermédiaire, l'ensemble du processus subir une 'Crash'.
                                </li>
                                <li>
                                Il y a aussi le problème du re-render. En raison de la façon dont React render fonctionne, les composants intermédiaires seront également forcés de refaire le render, ce qui dégradera les performances globales de votre application.
                                </li>
                            </ul>
                        </p>
                    </div>
                    <div>
                        <h3>Comment Utiliser l'API Context</h3>
                        <p>
                            <ol>
                                <li>
                                    Premierement, il faut declarer le context avec <code>createContext</code>.
                                </li>
                                <li>
                                    Importer le context pour que les donnes sont utilisables.
                                </li>
                                <li>
                                    Declarer le 'Provider' comme ça <code>ExampleContext.Provider</code>, et ajouter les valeurs qui vous voulez rendez disponible. Dans cette Provider, tous les components peuvent utiliser votre Context.
                                </li>
                                <li>
                                    Finalement, appelez le Context dans le component avec <code>useContext(ExampleContext)</code>
                                </li>
                            </ol>
                        </p>
                    </div>
                    <div>
                        <h3>Live Example - Weather App</h3>
                        <p>Maintenant, regarder l'usage de Context avec an Live Example avec BILEL</p>
                    </div>
                </Slider>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Fermer
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
export default ContextModal;