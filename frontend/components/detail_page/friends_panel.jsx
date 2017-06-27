import React from 'react';

export default class FriendsPanel extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllFriends(this.props.userId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.userId !== nextProps.userId) {
      this.props.fetchAllFriends(nextProps.userId);
    }
  }

  render() {
    const nineFriends = this.props.friends.slice(0, 9);
    const friendsItems = nineFriends.map(friend => {
      const {
        profile_picture,
        first_name,
        last_name,
      } = friend;

      return (
        <li className='friend-square' key={friend.friendship_id}>
          <img src={friend.profile_picture} className='friend-picture' />
          <div className='friend-name'>
            <div>{ first_name }</div>
            <div>{ last_name }</div>
          </div>
        </li>
      );
    });

    return (
      <div>
        <div className='friends-header'>
          <i className='fa fa-users header-icon friends'
            aria-hidden='true'
          />
          <div className='panel-title'>
            Friends . { this.props.friends.length }
          </div>
        </div>
        <ul className='friends-block'>
          { friendsItems }
        </ul>
      </div>
    );
  }
}
