import React from 'react';
import { Link } from 'react-router-dom';

const ConfirmedFriendButton = () => {
  return (
    <div className='profile-action-btn'>
      <i className="fa fa-check friend-action-icon" aria-hidden="true" />
      Friends
    </div>
  );
};

export default ConfirmedFriendButton;
