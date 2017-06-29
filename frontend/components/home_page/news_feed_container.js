import { connect } from 'react-redux';
import { fetchNewsPosts } from '../../actions/post_actions';
import { valuesArrayReverse } from '../../reducers/selectors';
import Feed from '../detail_page/feed';

const mapStateToProps = ({newsFeed, session}) => {
  return {
    posts: valuesArrayReverse(newsFeed),
    receiverId: session.currentUser.id,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: userId => dispatch(fetchNewsPosts(userId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed);
