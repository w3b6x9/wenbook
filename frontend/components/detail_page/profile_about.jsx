import React from 'react';
import { Link } from 'react-router-dom';
import ProfileAboutName from './profile_about_name';
import ProfileAboutEmail from './profile_about_email';
import ProfileAboutGender from './profile_about_gender';
import ProfileAboutBirthday from './profile_about_birthday';

export default class ProfileAbout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { first_name, last_name, email, gender, birth_year,
      birth_month, birth_day, id } = this.props.user;
    const { pathname } = this.props.location;

    return (
      <div className='about-section'>
        <div className='about-header'>
          <i className="fa fa-user user-icon" aria-hidden="true" />
          <Link to={pathname} replace>About</Link>
        </div>
        <div className='about-subsection'>
          <div className='about-tab'>
            <Link to={pathname} replace>Overview</Link>
          </div>
          <ul className='about-main'>
            <li className='about-item'>
              <ProfileAboutName currentUserId={this.props.currentUser.id}
                user={this.props.user} pathName={this.props.location.pathname}
                nameForm={this.props.nameForm} displayForm={this.props.displayForm} />
            </li>
            <li className='about-item'>
              <ProfileAboutEmail currentUserId={this.props.currentUser.id}
                user={this.props.user} pathName={this.props.location.pathname}
                emailForm={this.props.emailForm} displayForm={this.props.displayForm} />
            </li>
            <li className='about-item'>
              <ProfileAboutGender currentUserId={this.props.currentUser.id}
                user={this.props.user} pathName={this.props.location.pathname}
              genderForm={this.props.genderForm} displayForm={this.props.displayForm} />
            </li>
            <li className='about-item'>
              <ProfileAboutBirthday currentUserId={this.props.currentUser.id}
                user={this.props.user} pathName={this.props.location.pathname}
              birthdayForm={this.props.birthdayForm} displayForm={this.props.displayForm} />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
