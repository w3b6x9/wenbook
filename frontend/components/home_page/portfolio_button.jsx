import React from 'react';
import { NavLink } from 'react-router-dom';

const PortfolioButton = () => {
  return (
    <a href={ 'http://www.wenboxie.com' }
      target='_blank'
      className='panel-profile-link'>
      <i className="fa fa-globe linkedin-icon" aria-hidden="true" />
      <div className='panel-profile-btn'>
        <div className='panel-profile-name'>
          Website
        </div>
      </div>
    </a>
  );
};

export default PortfolioButton;
