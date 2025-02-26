import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../assets/TurboThrill/game1.png'
import image2 from '../assets/proj2img/1722928618156.jfif'
import { Link } from 'react-router-dom';

const ProjectCarousel = () => {

    //A project carousel to display in the front page so people can easily navigate
    //and get a quick overview of projects. 
    //Future plans to make better and more immersive with front page
    let images = [image1, image2]
    return (
        <>
            <div className = "d-flex justify-content-center align-items-center mb-3">
                <Carousel>
                    {images.map((img, index) => (
                        <Carousel.Item key={index}>
                            <img className="d-block w-20" src={img} alt={`Slide ${index + 1}`} />
                            <Carousel.Caption>
                                <h3>Slide {index + 1}</h3>
                                <p>Some description for slide {index + 1}.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
            <div className = "d-flex justify-content-center align-items-center">
                <Link to="/projects" className="btn btn-primary me-3">View Projects</Link>
            </div>
        </>
    );
};

export default ProjectCarousel;
