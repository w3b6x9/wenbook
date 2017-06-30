import React from 'react';
import { Link } from 'react-router-dom';

const FriendButton = ({receiverId, createFriendship}) => {
  const friendship = {
    status: 'pending',
    receiver_id: receiverId,
  };

  return (
    <Link to={ '/profile/' + receiverId }
      onClick={createFriendship(friendship)}
      className='profile-action-btn'
      replace
      >
      <i className="fa fa-user-plus friend-action-icon" aria-hidden="true" />
      Add Friend
    </Link>
  );
};

export default FriendButton;
