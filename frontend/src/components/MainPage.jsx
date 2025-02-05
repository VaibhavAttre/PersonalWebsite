import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ParallaxBG from './ParallaxFP';

function MainPage() {
    return (
        <>
            <ParallaxBG>
                <Container className="mt-1 pt-3 text-end">
                    <Row className="justify-content-end">
                        <Col md={8}>
                            <h1 className="display-1 text-end">VAIBHAV ATTRE</h1>
                            <p className="lead mt-3 text-end">
                                Hi, I'm Vaibhav Attre! I'm a passionate developer working on exciting projects in Operating Systems, Game Development, Aviation and more!
                                Explore my work, learn about me, and get in touch!
                            </p>
                            <div className="mt-4 text-end">
                                <Button variant="primary" href="#about" className="me-3">
                                    About Me
                                </Button>
                                <Button variant="success" href="#projects">
                                    View Projects
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </ParallaxBG>
        </>
    );
}

export default MainPage;
