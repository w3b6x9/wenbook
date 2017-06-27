import React from 'react';
import InfoPanelContainer from './info_panel_container';
import FriendsPanelContainer from './friends_panel_container';

export default class TimelineSection extends React.Component {
  render() {
    return(
      <div className='timeline-section'>
        <div className='panel'>
          <div className='info-panel'>
            <InfoPanelContainer />
          </div>
          <div className='friends-panel'>
            <FriendsPanelContainer />
          </div>
        </div>
        <div className='wall-feed-section'>
          WALLFEED
        </div>
      </div>
    );
  }
}
