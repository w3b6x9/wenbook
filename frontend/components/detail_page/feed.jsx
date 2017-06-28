import React from 'react';
import FeedItem from './feed_item';

export default class Feed extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPosts(this.props.receiverId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.receiverId !== nextProps.receiverId) {
      this.props.fetchPosts(nextProps.receiverId);
    }
  }

  render() {
    const feedItems = this.props.posts.map(post => {
      return (<FeedItem post={ post } key={ post.id } />);
    });

    return (
      <ul className='feed-section'>
        { feedItems }
      </ul>
    );
  }
}
