import React from 'react';
import { Link } from 'react-router-dom';
import NameFormContainer from './name_form_container';

export default class ProfileAbout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showNameForm: false,
    };

    this.nameFormClicked = this.nameFormClicked.bind(this);
  }

  nameFormClicked() {
    if (this.state.showNameForm) {
      this.setState({ showNameForm: false });
    } else {
      this.setState({ showNameForm: true });
    }
  }

  render() {
    const { first_name, last_name, email, gender, birth_year,
      birth_month, birth_day, id } = this.props.user
      { id === this.props.currentUser.id ? <NameFormContainer /> : null }

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
              { this.state.showNameForm ? <NameFormContainer /> :
                <Link to={this.props.location.pathname}
                  onClick={this.nameFormClicked} replace>Edit</Link> }
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
