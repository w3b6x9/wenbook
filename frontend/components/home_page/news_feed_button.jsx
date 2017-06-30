import React from 'react';
import { NavLink } from 'react-router-dom';

const NewsFeedButton = () => {
  return (
    <NavLink to={ '/' }
      activeClassName='panel-link-select'
      className='panel-profile-link'>
      <i className="fa fa-newspaper-o news-feed-icon" aria-hidden="true" />
      <div className='panel-profile-btn'>
        <div className='panel-profile-name'>
          News Feed
        </div>
      </div>
    </NavLink>
  );
};

export default NewsFeedButton;
