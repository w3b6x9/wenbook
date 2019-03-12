import React from 'react';
import ProfileButton from './profile_button';
import FeedPostFormContainer from '../detail_page/feed_post_form_container';
import NewsFeedContainer from './news_feed_container';
import NewsFeedButton from './news_feed_button';
import GitHubButton from './github_button';
import LinkedInButton from './linked_in_button';
import BirthdaySection from './birthday_section';
import PortfolioButton from './portfolio_button';
import AdsSection from './ads_section';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='home-body'>
        <div className='home-section-left' >
          <div className='home-panel-links'>
            <ProfileButton currentUser={ this.props.currentUser } />
            <NewsFeedButton />
            <PortfolioButton />
            <GitHubButton />
            <LinkedInButton />
          </div>
          <div className='news-feed-container'>
            <FeedPostFormContainer />
            <NewsFeedContainer />
          </div>
          <div>
            <BirthdaySection />
            <AdsSection />
          </div>
        </div>
      </div>
    );
  }
}
