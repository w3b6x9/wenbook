import React from 'react';
import { Link } from 'react-router-dom';

const BirthdaySection = () => {
  return (
    <div className='birthday-section'>
      <div className='birthday-layout'>
        <i className="fa fa-gift gift-icon" aria-hidden="true" />
        <Link to='/profile/6' className='bday-user-name'>Alvina Morar</Link>
        <div className='bday-text'>{"'"}s birthday is today</div>
      </div>
    </div>
  );
};

export default BirthdaySection;
