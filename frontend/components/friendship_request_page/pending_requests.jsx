import React from 'react';

export default class PendingRequests extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestPendingRequests();
  }

  handleClick(status, friendshipId) {
    const friendship = { status, friendship_id: friendshipId };
    return () => {
      this.props.updatePendingRequest(friendship);
    };
  }

  render() {
    const requests = this.props.pending_requests.map(request => {
      return (
        <li key={request.friendship_id} className='request-item'>
          <div className='info-left'>
            <img src={request.profile_picture} className='request-profile-pic' />
            <div className='user-name'>
              { request.first_name + ' ' + request.last_name }
            </div>
          </div>
          <div className='action-btn'>
            <button className='confirm-btn btn' onClick={this.handleClick(
                'confirmed',
                request.friendship_id
              )}>Confirm</button>
            <button className='delete-btn btn' onClick={this.handleClick(
                'denied',
                request.friendship_id
              )}>Delete Request</button>
          </div>
        </li>
      );
    });
    const requestsCount = this.props.pending_requests.length;

    return (
      <div className='requests-container'>
        <div className='requests-header'>
          Respond to Your { requestsCount } Friend Requests
        </div>
        <ul className='request-list'>
          { requests }
        </ul>
      </div>
    );
  }
}
