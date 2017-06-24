import React from 'react';
import { Link } from 'react-router-dom';

export default class ProfileNavigation extends React.Component {
  render() {
    const timelinePath = '/profile/' + this.props.userId;

    return (
      <div>
        <Link to={timelinePath} replace>Timeline</Link>
      </div>
    );
  }
}
