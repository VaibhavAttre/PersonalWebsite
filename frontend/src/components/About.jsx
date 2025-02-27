import React from 'react';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import { useSpring, animated } from '@react-spring/web';
import Image from 'react-bootstrap/Image';
import image1 from '../assets/dusk/sky.png';
import image2 from '../assets/personalimg.jfif';

export default function About() {
  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateY(-10px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 1000 }
  });

  const pulse = useSpring({
    to: [
      { transform: 'scale(1.2)', opacity: 1 },
      { transform: 'scale(1)', opacity: 0.5 }
    ],
    from: { transform: 'scale(1)', opacity: 1 },
    loop: { reverse: true },
    config: { duration: 1000 }
  });

  return (
    <Container
      fluid
      className="vh-100 d-flex align-items-center justify-content-center position-relative"
    >
      <Image
        src={image1}
        alt="Background"
        className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
      />
      <Container className="text-center position-relative">
        <Row>
          <animated.div style={fadeIn}>
            <h1 className="display-4 text-light fw-bold mb-3">
              I'm <span className="text-warning">Vaibhav</span>
            </h1>
          </animated.div>
        </Row>
        <Row>
          <animated.div style={fadeIn}>
            <h2 className="h3 text-light fw-bold mb-3">
              Interested in Operating Systems, Game Development, and more!
            </h2>
          </animated.div>
        </Row>
        <Row className="align-items-center">
          {/* On mobile (xs) this column spans full width, on md and up it takes 6/12 columns */}
          <Col xs={12} md={6}>
            <Image
              src={image2}
              alt="Vaibhav"
              className="img-fluid mx-auto d-block"
            />
          </Col>
          <Col xs={12} md={6}>
            <animated.div style={fadeIn}>
              <h3 className="h5 text-light fw-bold mb-3 lh-lg">
                I am a Computer Science student at UC Irvine. Over the last 10
                years, I have come to love Computer Science. I have found a passion
                in learning about how{' '}
                <animated.span style={pulse} className="text-warning fw-bold">
                  Operating Systems
                </animated.span>{' '}
                work, and am extremely interested in working on low-level systems
                in the future. I also love{' '}
                <animated.span style={pulse} className="text-warning fw-bold">
                  making Video Games
                </animated.span>{' '}
                in my free time using various engines such as Unity, Unreal Engine,
                and more bare-bones engines such as SDL2.
              </h3>
            </animated.div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
