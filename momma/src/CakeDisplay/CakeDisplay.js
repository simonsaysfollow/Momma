import React from 'react';
import './CakeDisplay.css';
import { Container, Row, Col } from 'react-bootstrap';
import rocket from '../Images/rocketPlaceHolder.png'

function CakeDisplay() {
    return (
        <div className="whole-body">
            <div className="body-title">
                <h1><u>Gallary</u></h1>
            </div>
            <div className="body-images">
                <Container >
                    <Row>
                        <Col> <img className="image-placeholder" src={rocket}></img></Col>
                        <Col> <img className="image-placeholder" src={rocket}></img></Col>
                        <Col> <img className="image-placeholder" src={rocket}></img></Col>
                        <Col> <img className="image-placeholder" src={rocket}></img></Col>
                    </Row>
                    <Row>
                        <Col> <img className="image-placeholder" src={rocket}></img></Col>
                        <Col> <img className="image-placeholder" src={rocket}></img></Col>
                        <Col> <img className="image-placeholder" src={rocket}></img></Col>
                        <Col> <img className="image-placeholder" src={rocket}></img></Col>
                    </Row>
                </Container>
            </div>
        </div >
    );

}

export default CakeDisplay;