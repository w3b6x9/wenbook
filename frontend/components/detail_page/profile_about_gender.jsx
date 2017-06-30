import React from 'react';
import GenderFormContainer from './gender_form_container';
import { Link } from 'react-router-dom';

const ProfileAboutGender = props => {
  const { id, gender } = props.user;

  if (id === props.currentUserId) {
    if (props.genderForm) {
      return (<GenderFormContainer />);
    } else {
      return (
        <div className='detail-about-list-item'>
          <div>{ gender }</div>
          <Link to={ props.pathName }
            className='detail-about-action'
            onClick={props.displayForm('genderForm')}
            replace>Edit your gender
          </Link>
        </div>
      );
    }
  } else {
    return null;
  }
};

export default ProfileAboutGender;
