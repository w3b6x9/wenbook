import React from 'react';

export default class InfoPanel extends React.Component {
  render() {
    const { email, gender, birth_month, birth_day,
      birth_year } = this.props.user;

    return (
      <div>
        <div className='panel-header'>
          <i className="fa fa-globe globe-icon" aria-hidden="true" />
          <div className='panel-title'>
            Intro
          </div>
        </div>
        <div className='info-item'>
          <i className='fa fa-envelope icon' aria-hidden='true' />
          { email }
        </div>
        <div className='info-item'>
          <i className={ 'fa gender-icon ' + ((gender === 'Male') ?
            'fa-mars' : 'fa-venus') }
            aria-hidden='true' />
          {gender}
        </div>
        <div className='info-item'>
          <i className="fa fa-birthday-cake icon" aria-hidden="true" />
          { birth_month + '/' + birth_day + '/' + birth_year }
        </div>
      </div>
    );
  }
}
