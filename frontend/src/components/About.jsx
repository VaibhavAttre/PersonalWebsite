import React from 'react';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import { useSpring, animated } from '@react-spring/web';
import Image from 'react-bootstrap/Image';
import image1 from '../assets/dusk/sky.png';
import image2 from '../assets/personalimg.jfif'

export default function About() {

  //Using spring to create a fade in effect from -10px to 0 px
  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateY(-10px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 1000 } 
  });

  //Using spring to create a pulse animation for certain keywords
  const pulse = useSpring({
    to: [
      { transform: 'scale(1.2)', opacity: 1 },
      { transform: 'scale(1)', opacity: 0.5 },
    ],
    from: { transform: 'scale(1)', opacity: 1 },
    loop: { reverse: true }, 
    config: { duration: 1000 } 
  });

  //Returns a component for the about me page alongside simple fade in animations
  return (
    <Container fluid className="vh-100 d-flex align-items-center justify-content-center position-relative">
      <Image src={image1} className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover" />
      <Container className="text-center position-relative">
        {/* Name and interest */}
        <Row>
          <animated.div style={fadeIn}>
            <h1 className="display-4 text-light fw-bold mb-3">I'm <span className='text-warning'>Vaibhav</span></h1>
          </animated.div>
        </Row>
        <Row>
          <animated.div style={fadeIn}>
            <h2 className="h3 text-light fw-bold mb-3">
              Interested in Operating Systems, Game Development, and more!
            </h2>
          </animated.div>
        </Row>
        <Row>
            <Col>
                <Image src={image2} className="img-fluid w-50 h-auto mx-auto d-block" />
            </Col>

          <Col>
          {/* The text in about me page */}
            <animated.div style={fadeIn}>
              <h3 className="h5 text-light fw-bold mb-3 lh-lg">
                I am a Computer Science student at UC Irvine. Over the last 10 years, I have come to love 
                Computer Science. I have found a passion in learning about how
                <animated.span style={pulse} className="text-warning fw-bold">
                  {" "}Operating Systems{" "}
                </animated.span> 
                work, and am extremely interested in working on low-level systems in the future. 
                I also love
                <animated.span style={pulse} className="text-warning fw-bold">
                  {" "}making Video Games{" "}
                </animated.span> 
                in my free time using various engines such as Unity, 
                Unreal Engine, and more bare-bones engines such as SDL2.
              </h3>
            </animated.div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
