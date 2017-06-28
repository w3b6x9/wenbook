import React from 'react';
import WallPostFormContainer from './wall_post_form_container';

export default class WallFeed extends React.Component {
  render() {
    return (
      <div className='wall-feed-container'>
        <WallPostFormContainer />
        <div>Many stuffs...</div>
      </div>
    );
  }
}
