import React from 'react';
import './Pages.css';

const About = () => {
  return (
    <div>
      <p className='section-title'>~About~</p>
      <img className='image' src={`${process.env.PUBLIC_URL}/hat.png`} alt="pirate hat"/>
      <p className='section-text'>
        HopperHacks X: 2025 will be the 10th annual hackathon of
        Women in Computer Science (WiCS) at Stony Brook University!<br/><br/>
        WiCS's mission is to provide encouragement
        and support to women in the field of
        computing. Hosting HopperHacks is one of the
        biggest ways we take part in that by providing
        students a place to gather and learn for a
        weekend full of innovation and creativity.</p>
    </div>
  );
};

export default About;

