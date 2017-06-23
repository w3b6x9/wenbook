import React from 'react';
import Profile from './profile';

export default class DetailPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Profile />
      </div>
    );
  }
}
