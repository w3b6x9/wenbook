import React from 'react';
import { Link } from 'react-router-dom';

export default class Comment extends React.Component {
  render() {
    const {
      author_id,
      author_first_name,
      author_last_name,
      author_profile_picture,
      time_ago,
      body,
    } = this.props.comment;

    return(
      <li>
        <div className='comment-header'>
          <img src={ author_profile_picture } className='comment-pic' />
          <div>
            <div className='comment-top-section'>
              <Link to={'/profile/' + author_id }
                className='comment-name-link'
                replace
              >
                { author_first_name + ' ' + author_last_name }
              </Link>
              <div className='comment-body'>{ body }</div>
            </div>
            <div className='feed-time-ago'>{ time_ago }</div>
          </div>
        </div>
      </li>
    )
  }
}
