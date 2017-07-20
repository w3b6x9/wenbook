import React from 'react';
import { NavLink } from 'react-router-dom';

const GitHubButton = () => {
  return (
    <a href='http://www.github.com/w3b6x9'
      target='_blank'
      className='panel-profile-link'>
      <i className="fa fa-github github-icon" aria-hidden="true" />
      <div className='panel-profile-btn'>
        <div className='panel-profile-name'>
          GitHub
        </div>
      </div>
    </a>
  );
};

export default GitHubButton;
