import React from 'react';
import { Link } from 'react-router-dom';

const RequestSendButton = ({userId}) => {
  return (
    <Link to={ '/profile/' + userId + '/about' }
      className='profile-action-btn'
      replace
      >
      <i className="fa fa-user-plus friend-action-icon" aria-hidden="true" />
      Friend Request Sent
    </Link>
  );
};

export default RequestSendButton;
