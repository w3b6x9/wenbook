import React from 'react';
import { Link } from 'react-router-dom';

const ProfileButton = props => {
  const {
    id,
    first_name,
    last_name,
    profile_picture,
  } = props.currentUser;

  return (
    <Link to={ '/profile/' + id } className='panel-profile-link'>
      <div className='panel-profile-btn'>
        <img src={ profile_picture } className='panel-profile-pic' />
        <div className='panel-profile-name'>
          { first_name + ' ' + last_name }
        </div>
      </div>
    </Link>
  );
};

export default ProfileButton;
