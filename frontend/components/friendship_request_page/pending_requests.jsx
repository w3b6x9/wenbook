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
        <li key={request.friendship_id}>
          {request.first_name}
          <button onClick={this.handleClick(
              'confirmed',
              request.friendship_id
            )}>Confirm</button>
          <button onClick={this.handleClick(
              'denied',
              request.friendship_id
            )}>Delete Request</button>
        </li>
      );
    });

    return (
      <div>
        { requests }
      </div>
    );
  }
}
