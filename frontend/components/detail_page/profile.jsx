import React from 'react';
import { Link } from 'react-router-dom';
import EditProfileButton from './edit_profile_button';
import RequestRespondButton from './request_respond_button';
import RequestSendButton from './request_send_button';
import FriendButton from './friend_button';
import ConfirmedFriendButton from './confirmed_friend_button';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestSingleUser(this.props.userId);
    this.props.fetchSentRequests();
    this.props.requestPendingRequests();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.userId !== nextProps.userId) {
      this.props.requestSingleUser(nextProps.userId);
    }
  }

  handleFileSubmit(property) {
    const userId = this.props.user.id;
    const imageData = new FormData();

    return e => {
      imageData.append(`user[${property}]`, e.currentTarget.files[0]);
      return this.props.updateSingleUserImage(userId, imageData);
    };
  }

  buttonAction() {
    const {
      user,
      userId,
      currentUserId,
      receivedRequests,
      sentRequests,
      friends,
    } = this.props;
    let receivedRequest = false;
    let sentRequest = false;
    let friend = false;

    for (let i=0; i < receivedRequests.length; i++) {
      if (receivedRequests[i].id === userId) {
        receivedRequest = true;
      }
    }

    for (let i=0; i < sentRequests.length; i++) {
      if (sentRequests[i].receiver_id === userId) {
        sentRequest = true;
      }
    }

    for (let i=0; i < friends.length; i++) {
      if (friends[i].id === currentUserId) {
        friend = true;
      }
    }

    if (userId === currentUserId) {
      return (
        <EditProfileButton userId={userId} />
      );
    } else if (receivedRequest) {
      return (
        <RequestRespondButton userId={userId} />
      );
    } else if (sentRequest) {
      return (
        <RequestSendButton userId={userId} />
      );
    } else if (friend) {
      return (
        <ConfirmedFriendButton />
      );
    } else {
      return (
        <FriendButton receiverId={userId}
          createFriendship={this.props.createFriendship} />
      );
    }
  }

  render() {
    const { user, userId } = this.props;
    const fullName = user.first_name + ' ' + user.last_name;

    return (
      <div className='cover-info'>
        <div>
          <img src={user.cover_picture} className='cover-pic'
            height='204px'
            width='851px'
          />
          { this.buttonAction() }
        </div>
        <div className='profile-pic'>
          <img src={user.profile_picture}
            className='profile-pic-inner'
          />
        </div>
        <div className='cover-full-name'>
          {fullName}
        </div>
      </div>
    );
  }
}
