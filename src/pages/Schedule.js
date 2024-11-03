import React from 'react';
import './Pages.css';

const Schedule = () => {
  return (
    <div>
      <p className='section-title'>~Schedule~</p>
      <img className='image' src={`${process.env.PUBLIC_URL}/stopwatch.png`} alt="stopwatch"/>
      <p className='section-text'>HopperHacks 2025 will begin SATURDAY, FEBRUARY 22nd at 10:00 AM and end on SUNDAY, FEBRUARY 23rd at 8:00 PM. Check back later for the full workshop/event schedule!</p>
    </div>
  );
};

export default Schedule;