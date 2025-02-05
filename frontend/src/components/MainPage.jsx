import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ParallaxBG from './ParallaxFP';
import { Link } from 'react-router-dom';
import { useSpring, animated } from '@react-spring/web';

function MainPage() {

    const fadeIn = useSpring({
        from: { opacity: 0, transform: 'translateY(-10px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
        config: { duration: 1000 } 
      });
    return (
        <>
            <ParallaxBG>
                <Container className="mt-1 pt-3 text-end">
                    <Row className="justify-content-end">
                        <Col md={8}>
                            <animated.h1 style = {fadeIn} className="display-1 text-end">Hi, I'm Vaibhav Attre</animated.h1>
                            <animated.p style = {fadeIn} className="display-6 text-end">
                                I'm a passionate developer and Computer Science Student.
                                Explore my work, learn about me, and get in touch!
                            </animated.p>
                            <animated.div style = {fadeIn} className="mt-4 text-end">
                                <Link to="/about" className="btn btn-primary me-3">About Me</Link>
                                <Button variant="success" href="#projects">
                                    View Projects
                                </Button>
                            </animated.div>
                        </Col>
                    </Row>
                </Container>
            </ParallaxBG>
        </>
    );
}

export default MainPage;
