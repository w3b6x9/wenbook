import React from 'react';
import { Link } from 'react-router-dom';

export default class FeedItem extends React.Component {
  render() {
    const {
      author_id,
      author_profile_picture,
      author_first_name,
      author_last_name,
      body,
      time_ago,
    } = this.props.post;

    return (
      <li className='feed-item'>
        <div className='feed-item-body'>
          <img src={ author_profile_picture } className='author-pic' />
          <div className='feed-item-info'>
            <Link to={ '/profile/' + author_id }
              className='feed-user-name' >
              { author_first_name + ' ' + author_last_name }
            </Link>
            <div className='feed-time-ago'>{ time_ago }</div>
          </div>
        </div>
        <div className='feed-body'>
          { body }
        </div>
      </li>
    );
  }
}
