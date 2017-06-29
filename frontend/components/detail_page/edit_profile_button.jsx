import React from 'react';
import { Link } from 'react-router-dom';

const EditProfileButton = ({userId}) => {
  return (
    <Link to={ '/profile/' + userId + '/about' }
      className='profile-action-btn'
      replace
    >
      <i className="fa fa-pencil friend-action-icon" aria-hidden="true" />
      Edit Profile
    </Link>
  );
};

export default EditProfileButton;
