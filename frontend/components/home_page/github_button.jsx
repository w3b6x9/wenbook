import React from 'react';
import { NavLink } from 'react-router-dom';

const GitHubButton = () => {
  return (
    <NavLink to={ '/github' }
      activeClassName='panel-link-select'
      className='panel-profile-link'>
      <i className="fa fa-github news-feed-icon" aria-hidden="true" />
      <div className='panel-profile-btn'>
        <div className='panel-profile-name'>
          GitHub
        </div>
      </div>
    </NavLink>
  );
};

export default GitHubButton;
