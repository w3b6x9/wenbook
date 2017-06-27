import React from 'react';
import PendingRequestsContainer from './pending_requests_container';

export default class FriendshipRequests extends React.Component {
  render() {
    return (
      <div className='friend-requests-main'>
        <PendingRequestsContainer />
      </div>
    );
  }
}
