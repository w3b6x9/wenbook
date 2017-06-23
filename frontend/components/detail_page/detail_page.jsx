import React from 'react';
import ProfileContainer from './profile_container';

export default class DetailPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='detail-body'>
        <div className='detail-header-section'>
          <ProfileContainer />
        </div>
      </div>
    );
  }
}
