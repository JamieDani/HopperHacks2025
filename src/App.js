import './App.css';
import Nav from './components/Nav/Nav.js';
import About from './pages/About.js';
import Schedule from './pages/Schedule.js';
import FAQ from './pages/FAQ.js';
import Sponsors from './pages/Sponsors.js';
import React, { useEffect, useState } from 'react';
import Star from './components/Star/Star.js'
import applyImage from './assets/apply.png'; 
import pathsImage from './assets/paths.png'; 

const stars = [
  { left: 23, top: 8, size: 9 },
  { left: 85, top: 10, size: 5 },
  { left: 31, top: 9, size: 3 },
  // Add more stars with specific coordinates
];

const App = () => {

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    document.title = 'HopperHacks X: 2025'; // Set your desired tab title here
  }, []);

  useEffect(() => {
    // Trigger the animation after the component mounts
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 100); // Delay to ensure it triggers after render

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{backgroundImage: `url(${pathsImage})`}} className='background'>
      <Nav />
      {stars.map((star, index) => (
        <Star key={index} left={star.left} top={star.top} size={star.size} />
      ))}
      <div className='left-images'>
        {/* <img className='ship-smudge' src={`${process.env.PUBLIC_URL}/ship_smudge.png`} alt="hopper on a ship"/> */}
        <img className='ship' src={`${process.env.PUBLIC_URL}/hopper_ship.png`} alt="ship smudge"/>
      </div>
      <img className='x' src={`${process.env.PUBLIC_URL}/X.png`} alt="an x"/>
      <div className='info-container'>
        <p className={animate ? 'slide-in-left title' : 'title'}>HopperHacks</p>
        <p className={animate ? 'slide-in-left year' : 'year'}>2025</p>
        <h1 className={animate ? 'slide-in-left dates' : 'dates'}>02.22 - 02.23</h1>
        <div className='apply-button'>
          <button style={{zIndex: '8888', backgroundImage: `url(${applyImage})`}}  className="actual-button">
            <h1><a rel="noreferrer" style={{color: 'inherit', textDecoration: 'none'}} target='_blank' href="https://docs.google.com/forms/d/e/1FAIpQLScfGGh5Z0vCOZdxE2o25L-ytRtje0S4OO9qMSzMhtq6FDwSww/viewform?usp=sf_link">Apply</a></h1>
          </button>
        </div>
        <div className='pages'>
          <div id='about'>
            <About/>
          </div>
          <div id="schedule">
            <Schedule/>
          </div>
          <div id="faq">
            <FAQ/>
          </div>
          <div id="sponsors">
            <Sponsors/>
          </div>
        </div>
      </div>
      <div className='footer'>
        <p>Brought to you by Women in Computer Science at Stony Brook University</p>
      </div>
    </div>
  );
};

export default App;

