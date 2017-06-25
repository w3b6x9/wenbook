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

  render() {
    const { user } = this.props;
    const fullName = user.first_name + ' ' + user.last_name;

    return (
      <div className='cover-info'>
        <div>
          <img src='https://theamericangenius.com/wp-content/uploads/2012/11/facebook-cover-photo-8.jpg'
            height='204px'
            width='851px'
          />
          <Link to ={ '/profile/' + this.props.userId + '/about' }
            className='edit-profile-btn'
            replace>
              <i className="fa fa-pencil edit-icon" aria-hidden="true" />
              Edit Profile
          </Link>
        </div>
        <div className='profile-pic'>
          <img src='http://2.bp.blogspot.com/-EsajbcKAL4M/VDKae30gL4I/AAAAAAAAAAo/7f--9cnz2Ws/s1600/headshot-panda.jpg'
            height='168px'
            width='168px'
          />
        </div>
        <div className='cover-full-name'>
          {fullName}
        </div>
      </div>
    );
  }
}
