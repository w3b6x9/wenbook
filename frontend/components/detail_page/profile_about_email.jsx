import React from 'react';
import EmailFormContainer from './email_form_container';
import { Link } from 'react-router-dom';

const ProfileAboutEmail = props => {
  const { id, email } = props.user;

  if (id === props.currentUserId) {
    if (props.emailForm) {
      return (<EmailFormContainer />);
    } else {
      return (
        <div className='detail-about-list-item'>
          <div>{ email }</div>
          <Link to={ props.pathName }
            className='detail-about-action'
            onClick={props.displayForm('emailForm')}
            replace>Edit your email
          </Link>
        </div>
      );
    }
  } else {
    return null;
  }
};

export default ProfileAboutEmail;
