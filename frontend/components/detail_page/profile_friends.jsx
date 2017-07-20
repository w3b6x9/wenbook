import React from 'react';
import { Link } from 'react-router-dom';

export default class ProfileFriends extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllFriends(this.props.userId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.userId !== nextProps.userId) {
      this.props.fetchAllFriends(nextProps.userId);
    }
  }

  handleClick(friendshipId) {
    if (this.props.currentUser.id === this.props.userId) {
      const friendship = {
        status: 'deleted',
        friendship_id: friendshipId,
      };

      return () => {
        this.props.updatePendingRequest(friendship)
        .then(() => this.props.fetchAllFriends(this.props.userId));
      };
    }
  }

  render() {
    const { pathname } = this.props.location;
    const friends = this.props.friends.map(friend => {
      return (
        <li className='pro-friend-block' key={friend.friendship_id}>
          <div className='name-pic'>
            <img src={friend.profile_picture} className='pro-friend-pic' />
            <div className='pro-friend-name'>
              <Link to={ '/profile/' + friend.id } className='pro-friend-link'
                onClick={ () => window.scrollTo(0, 0) }
              >
                { friend.first_name + ' ' + friend.last_name }
              </Link>
            </div>
          </div>
          <button className='pro-friends-btn'
            onClick={ this.handleClick(friend.friendship_id) }>
            <i className="fa fa-check check-icon" aria-hidden="true" />
            Friends
          </button>
        </li>
      );
    });

    return (
      <div className='pro-friends-section'>
        <div className='pro-friends-header'>
          <i className="fa fa-users user-icon" aria-hidden="true" />
          <Link to={ pathname } className='pro-friends-title'
            replace>Friends</Link>
        </div>
        <ul className='pro-friends-body'>
          { friends }
        </ul>
      </div>
    );
  }
}
