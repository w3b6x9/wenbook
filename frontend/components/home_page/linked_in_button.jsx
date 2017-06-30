import React from 'react';
import { NavLink } from 'react-router-dom';

const LinkedInButton = () => {
  return (
    <NavLink to={ '/linkedin' }
      activeClassName='panel-link-select'
      className='panel-profile-link'>
      <i className="fa fa-linkedin-square news-feed-icon" aria-hidden="true" />
      <div className='panel-profile-btn'>
        <div className='panel-profile-name'>
          LinkedIn
        </div>
      </div>
    </NavLink>
  );
};

export default LinkedInButton;
