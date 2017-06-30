import React from 'react';
import NameFormContainer from './name_form_container';
import { Link } from 'react-router-dom';

const ProfileAboutName = props => {
  const { id, first_name, last_name } = props.user;

  if (id === props.currentUserId) {
    if (props.nameForm) {
      return (<NameFormContainer />);
    } else {
      return (
        <div className='detail-about-list-item'>
          <div>{ first_name + ' ' + last_name }</div>
          <Link to={ props.pathName }
            className='detail-about-action'
            onClick={props.displayForm('nameForm')}
            replace>Edit your name
          </Link>
        </div>
      );
    }
  } else {
    return null;
  }
};

export default ProfileAboutName;
