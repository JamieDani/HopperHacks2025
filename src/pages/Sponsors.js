import React from 'react';
import './Pages.css';

const Sponsors = () => {
  return (
    <div>
      <p className='section-title'>~Sponsors~</p>
      <img className='image' src={`${process.env.PUBLIC_URL}/chest.png`} alt="treasure chest"/>
      <p className='section-text'>Sponsors will be revealed soon! If you're interested in sponsoring HopperHacks, please reach out to us at wics@cs.stonybrook.edu.</p>
    </div>
  );
};

export default Sponsors;