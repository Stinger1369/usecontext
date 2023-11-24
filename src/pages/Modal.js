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
                        <h3>Paris</h3>
                        <p>Paris est la capitale de la France.</p>
                    </div>
                    <div>
                        <h3>Paris</h3>
                        <p>Paris est la capitale de la France.</p>
                    </div>
                    <div>
                        <h3>Paris</h3>
                        <p>Paris est la capitale de la France.</p>
                    </div>
                    <div>
                        <h3>Paris</h3>
                        <p>Paris est la capitale de la France.</p>
                    </div>
                    <div>
                        <h3>Paris</h3>
                        <p>Paris est la capitale de la France.</p>
                    </div>
                    <div>
                        <h3>Paris</h3>
                        <p>Paris est la capitale de la France.</p>
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