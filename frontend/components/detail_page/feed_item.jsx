import React from 'react';
import { Link } from 'react-router-dom';
import { valuesArray } from '../../reducers/selectors';
import Comment from './comment';

export default class FeedItem extends React.Component {
  comments() {
    return valuesArray(this.props.post.comments);
  }

  render() {
    const {
      author_id,
      author_profile_picture,
      author_first_name,
      author_last_name,
      body,
      time_ago,
    } = this.props.post;

    const comments = this.comments().map(comment => {
      return (<Comment comment={ comment } key={ comment.id } />);
    });

    return (
      <li className='feed-item'>
        <div className='feed-item-body'>
          <img src={ author_profile_picture } className='author-pic' />
          <div className='feed-item-info'>
            <Link to={ '/profile/' + author_id }
              className='feed-user-name' replace>
              { author_first_name + ' ' + author_last_name }
            </Link>
            <div className='feed-time-ago'>{ time_ago }</div>
          </div>
        </div>
        <div className='feed-body'>
          { body }
        </div>
        <ul className='comment-section'>
          { comments }
        </ul>
      </li>
    );
  }
}
