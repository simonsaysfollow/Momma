import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './AboutUs.css';
import rastaMama from '../Images/rastaMama.JPG'

function AboutUs() {
    return(
        <Container style={{height:100+"%"}} >
            <Row style={{height:100+"%"}}>
                <Col className="left-image"> 
                    <img className="owner-image" src= {rastaMama}/>
                </Col>
                <Col className="right-description">
                    <div className="owner-text">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <p>Please email me  @ <a className="company-email" href="mailto:simontekeste@gmail.com">MommasCakes@gmail.com</a> </p>
                        <p>
                            - Mom
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    );

}

export default AboutUs;