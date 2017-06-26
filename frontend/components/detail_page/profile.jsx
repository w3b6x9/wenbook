import React from 'react';
import { Link } from 'react-router-dom';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestSingleUser(this.props.userId);
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

  render() {
    const { user, userId } = this.props;
    const fullName = user.first_name + ' ' + user.last_name;

    return (
      <div className='cover-info'>
        <div>
          <img src={user.cover_picture}
            height='204px'
            width='851px'
          />
        <input type='file' onChange={this.handleFileSubmit('cover_picture')} />
          <Link to ={ '/profile/' + userId + '/about' }
            className='edit-profile-btn'
            replace>
              <i className="fa fa-pencil edit-icon" aria-hidden="true" />
              Edit Profile
          </Link>
        </div>
        <div className='profile-pic'>
          <img src={user.profile_picture}
            height='168px'
            width='168px'
          />
        <input type='file' onChange={this.handleFileSubmit('profile_picture')} />
        </div>
        <div className='cover-full-name'>
          {fullName}
        </div>
      </div>
    );
  }
}
