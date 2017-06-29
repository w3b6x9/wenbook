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
        <div>
          { first_name + ' ' + last_name }
          <Link to={ props.pathName } onClick={props.displayForm('nameForm')}
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
