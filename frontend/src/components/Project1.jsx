import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { Container, Row, Col, Image } from 'react-bootstrap';
import game1 from '../assets/TurboThrill/game1.png';
import game2 from '../assets/TurboThrill/game2.png';
import game3 from '../assets/TurboThrill/game3.png';
import game4 from '../assets/TurboThrill/game4.png';
import bg from '../assets/scrolling_forest/10.png';
import grass1 from '../assets/scrolling_forest/01.png';
import treeleaves from '../assets/scrolling_forest/02.png';
import treetrunk from '../assets/scrolling_forest/03.png';
import mainmenu from '../assets/TurboThrill/mainmenu.png';
import treebehind from '../assets/scrolling_forest/05.png'
import treefurtherbehind from "../assets/scrolling_forest/06.png"
import './ProjectGallery.scss'


export default function ProjectGallery() {
    
    //Page for the turbothrill project. Uses horizontal parallax using
    //Spring. 
    //In future, make this into a template to apply to project pages in general
    const images = [game1, game2, game3, game4, mainmenu];
    const text = [
        <div>
            The game you see right now, <span className='text-warning'>TurboThrill</span>, is a game I developed with a group of game developers
            over the course of 6 months in Unity. The basic idea was to build a racing game where people would fight
            AI and build bases in a replica of Seattle. However, by the end, our MVP shifted as we tweaked our original
            ideas and ended up making a car racing game on procedurally generated terrain where players would race
            against AI to reach the finish line. On the way, they could use a turret on the car to shoot down enemies
            and also save themselves. Through this project, I learned a lot about game development and team communication,
            as well as project management through agile development. 
        </div>,
        <div>
            One of the biggest takeaways from this project was learning how to make realistic deadlines. Rather than having
            an overly ambitious goals at each sprint, being realistic and really decomposing what you should accomplish with your team
            is a lot more helpful and motivating at the end. At the start, my team wanted to make a scaled version of Seattle, but
            soon realized how unrealistic that goal was. So we talked it through and were able to make a game that was fun to play. 
        </div>,
        <div>
            However, I also got to learn a lot of technical skills in game development. One of the biggest features I wanted
            to implement was grass. At first I thought it was easy, but soon realized how hard it would be. Through this, I 
            learned about graphics programming and GPU Instancing, skills I use to this day while making games on the side.
        </div>,
        <div>
            I learned a lot of other things along the way too, such as how to optimize code effectively using debugging tools,
            documenting code effectively, data serialization, networking, and so much more!
        </div>
    ]

    return (
        <>
            <div>
                {/* Mapping text to one horizontal layer */}
                <Parallax pages={4} horizontal>
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

                    {/*Mapping images to the horizontal layers */}
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
