import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { Container, Row, Col, Image } from 'react-bootstrap';
import img1 from '../assets/proj2img/1722928618156.jfif';
import img2 from '../assets/proj2img/Screenshot 2025-02-08 215241.png';
import bg from '../assets/scrolling_forest/10.png';
import grass1 from '../assets/scrolling_forest/01.png';
import treeleaves from '../assets/scrolling_forest/02.png';
import treetrunk from '../assets/scrolling_forest/03.png';
import mainmenu from '../assets/TurboThrill/mainmenu.png';
import treebehind from '../assets/scrolling_forest/05.png'
import treefurtherbehind from "../assets/scrolling_forest/06.png"
import './ProjectGallery.scss'


export default function ProjectGallery() {
    
    //Similar to project 1 page, this project page uses horizontal parallax 
    //to show flat file manager project.
    const images = [img1, img2];
    const text = [
        <div>
            The project you see right now, <span className='text-warning'>a Flat File Manager</span>, is a project in which
            I developed a personal implementation of a file manager. Since I have become interested in Operating Systems,
            I have learned a lot about different algorithms behind OS and how to implement them. 
        </div>,
        <div>
            Through this project, I strengthed my skills in C++ and data structures, implementing things such as
            a trie, a tree for storing directories and files, and much more. I implemented features such as 
            cd, .., mkdir, making directories, making new users who can only access certain directories, as well as
            basic user auth. 
        </div>
    ]

    return (
        <>
            <div>
                <Parallax pages={2} horizontal>
                    {[...Array(4)].map((_, index) => (
                        <ParallaxLayer key={`bg-${index}`} offset={index} speed={0.2}>
                            <Image
                                src={bg}
                                fluid
                                className="w-100 vh-100 object-fit-cover position-absolute top-0 start-0 bg-layer"
                                style={{ zIndex: 0}} 
                            />
                        </ParallaxLayer>
                    ))}

                    {[...Array(4)].map((_, index) => (
                        <ParallaxLayer key={`treefurtherbehind-${index}`} offset={index} speed={0.4}>
                            <Image
                                src={treefurtherbehind}
                                fluid
                                className="w-100 position-absolute bottom-0 start-0 grass-layer "
                                style={{ zIndex: 1, height: "auto"}} 
                            />
                        </ParallaxLayer>
                    ))}

                    {[...Array(4)].map((_, index) => (
                        <ParallaxLayer key={`treebehind-${index}`} offset={index} speed={0.7}>
                            <Image
                                src={treebehind}
                                fluid
                                className="w-100 position-absolute bottom-0 start-0 grass-layer "
                                style={{ zIndex: 2, height: "auto"}} 
                            />
                        </ParallaxLayer>
                    ))}

                    {[...Array(4)].map((_, index) => (
                        <ParallaxLayer key={`grass-${index}`} offset={index} speed={1}>
                            <Image
                                src={grass1}
                                fluid
                                className="w-100 position-absolute bottom-0 start-0 grass-layer "
                                style={{ zIndex: 0, height: "auto"}} 
                            />
                        </ParallaxLayer>
                    ))}

                    {[...Array(4)].map((_, index) => (
                        <ParallaxLayer key={`tree-${index}`} offset={index} speed={1}>
                            <Image
                                src={treeleaves}
                                fluid
                                className="w-100 position-absolute bottom-0 start-0 grass-layer "
                                style={{ zIndex: 30, height: "auto"}} 
                            />
                            <Image
                                src={treetrunk}
                                fluid
                                className="w-100 position-absolute bottom-0 start-0 grass-layer "
                                style={{ zIndex: 30, height: "auto"}} 
                            />
                        </ParallaxLayer>
                    ))}

                    {[...Array(4)].map((_, index) => (
                        <ParallaxLayer key={`grass-${index}`} offset={index} speed={1}>
                            <Container>
                                <Row>
                                    <Col>
                                        <h3
                                            className="display-10 text-light mb-3 p-3 rounded"
                                            style={{
                                                backgroundColor: "rgba(0, 0, 0, 0.65)", 
                                            }}
                                        >
                                            {text[index]}
                                        </h3>
                                    </Col>

                                    <Col>
                                        <Image
                                            src={images[index]}
                                            fluid
                                            thumbnail
                                            style={{ zIndex: 0, height: "auto"}} 
                                        />
                                    </Col>
                                </Row>

                            </Container>
                        </ParallaxLayer>
                    ))}
                </Parallax>
            </div>
        </>
    );
}
