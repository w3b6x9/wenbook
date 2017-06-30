import React from 'react';
import BirthdayFormContainer from './birthday_form_container';
import { Link } from 'react-router-dom';

const ProfileAboutBirthday = props => {
  const { id, birth_year, birth_month, birth_day } = props.user;

  if (id === props.currentUserId) {
    if (props.birthdayForm) {
      return (<BirthdayFormContainer />);
    } else {
      return (
        <div className='detail-about-list-item'>
          { birth_month + '/' + birth_day + '/' + birth_year }
          <Link to={ props.pathName }
            className='detail-about-action'
            onClick={props.displayForm('birthdayForm')}
            replace>Edit your birthday
          </Link>
        </div>
      );
    }
  } else {
    return null;
  }
};

export default ProfileAboutBirthday;
