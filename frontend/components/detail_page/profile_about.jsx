import React from 'react';
import { Link } from 'react-router-dom';

export default class ProfileAbout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { first_name, last_name, email, gender, birth_year,
      birth_month, birth_day } = this.props.user

    return (
      <div className='about-section'>
        <h3>About</h3>
        <div className='about-subsection'>
          <div className='about-tab'>
            <Link to={this.props.location.pathname} replace>Overview</Link>
          </div>
          <div className='about-main'>
            <div className='about-item'>
              { first_name + ' ' + last_name }
            </div>
            <div className='about-item'>
              { email }
            </div>
            <div className='about-item'>
              { gender }
            </div>
            <div className='about-item'>
              { birth_month + '/' + birth_day + '/' + birth_year }
            </div>
          </div>
        </div>
      </div>
    );
  }
}
