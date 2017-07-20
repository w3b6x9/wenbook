import React from 'react';
import { NavLink } from 'react-router-dom';

const AngelListButton = () => {
  return (
    <a href={ 'https://angel.co/wenboxie' }
      target='_blank'
      className='panel-profile-link'>
      <i className="fa fa-angellist linkedin-icon" aria-hidden="true" />
      <div className='panel-profile-btn'>
        <div className='panel-profile-name'>
          AngelList
        </div>
      </div>
    </a>
  );
};

export default AngelListButton;
