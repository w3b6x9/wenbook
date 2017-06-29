import React from 'react';
import ProfileButton from './profile_button';
import FeedPostFormContainer from '../detail_page/feed_post_form_container';
import NewsFeedContainer from './news_feed_container';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='home-body'>
        <div className='home-section-left' >
          <ProfileButton currentUser={ this.props.currentUser } />
          <div className='news-feed-container'>
            <FeedPostFormContainer />
            <NewsFeedContainer />
          </div>
        </div>
      </div>
    );
  }
}
