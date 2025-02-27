import React, { useEffect, useRef } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import ProjectCarousel from './ProjectCarousel';
import image1 from '../assets/Demo 02 Parallax Pixel Sky/demo02_PixelSky_layer01.png'
import image2 from '../assets/Demo 02 Parallax Pixel Sky/demo02_PixelSky_layer02.png'
import image3 from '../assets/Demo 02 Parallax Pixel Sky/demo02_PixelSky_layer03.png'
import image4 from '../assets/Demo 01 Parallax Pixel Sky/demo01_PixelSky_layer01.png'
import image5 from '../assets/Layers/sunset.jpg'
import image7 from '../assets/Layers/near-clouds.png'
import image8 from '../assets/Layers/middle-mountains.png'
import image9 from '../assets/Layers/far-mountains.png'
import image10 from '../assets/Layers/near-trees.png'
import airplane from '../assets/_cc36e9f0-7728-4520-86ac-6554bc9cb3de-removebg-preview.png'

function ParallaxBG({children}) {
  //Component that uses Spring to create a parallax effect for the front page
  //Images for background as well as other images needed
  return (
    <>
    <Parallax pages={2}>
      {/* First layer (high up in sky) */}
      <ParallaxLayer offset={0} speed={3} style = {{zIndex: 20, pointerEvents: 'none'}} sticky={{start: 0, end: 4}} className="d-none d-md-block">
        <img
          src={airplane}
          style={{
          }}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.5} style={{zIndex: 1, pointerEvents: 'none'}}>
        <img
          src={image4}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.5} style={{zIndex: 7}}>
        {children}
      </ParallaxLayer>
      <ParallaxLayer offset={0.1} speed={1.0} style={{zIndex: 10, opacity: 0.8, pointerEvents: 'none'}}>
        <img
          src={image2}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0.15} speed={1.5} style={{zIndex: 15, opacity: 0.8, pointerEvents: 'none'}}>
        <img
          src={image3}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0.65} speed={2} style={{zIndex: 20, opacity: 0.3, pointerEvents: 'none'}}>
        <img
          src={image2}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0.8} speed={2.5} style={{zIndex: 25, opacity: 0.2, pointerEvents: 'none'}}>
        <img
          src={image3}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      </ParallaxLayer>
      {/* Second sky layer */}
      <ParallaxLayer  offset={0.9999999} speed={.5} style={{ zIndex: 35, pointerEvents: 'auto' }}>
        <ProjectCarousel/>
      </ParallaxLayer>
      <ParallaxLayer offset={0.75} speed={2.6} style={{zIndex: 35, opacity: 0.99, pointerEvents: 'none'}}>
        <img 
          src={image7}
          style={{
            width: '100%',
            height: '95%',
            objectFit: 'cover'
          }}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0.93} speed={1} style={{zIndex: 32, pointerEvents: 'auto'}}>
        <img
          src={image5}
          style={{
            width: '100%',
            height: '200%',
            objectFit: 'cover'
          }}
        />
        
      </ParallaxLayer>
      {/* The Ground */}
      <ParallaxLayer offset={1} speed={2.5} style={{zIndex: 30, pointerEvents: 'none'}}>
        <img
          src={image9}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={3.5} style={{zIndex: 32, pointerEvents: 'none'}}>
        <img
          src={image8}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={5.5} style={{zIndex: 32, pointerEvents: 'none'}}>
        <img
          src={image10}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />

      </ParallaxLayer>
      <ParallaxLayer className="d-flex justify-content-center align-items-center" offset={1} speed={5.5} style={{zIndex:32, pointerEvents:'none'}}>
        <h1 className='display-1'>
          Thanks for visiting my website!
        </h1>
      </ParallaxLayer>
    </Parallax>
    </>
  );
}

export default ParallaxBG;
