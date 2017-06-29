import React from 'react';
import { Link } from 'react-router-dom';

const RequestRespondButton = ({userId}) => {
  return (
    <Link to={ '/profile/' + userId + '/about' }
      className='profile-action-btn'
      replace
      >
      <i className="fa fa-user-plus friend-action-icon" aria-hidden="true" />
      Respond to Friend Request
    </Link>
  );
};

export default RequestRespondButton;
