import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchWallPosts } from '../../actions/post_actions';
import { valuesArray } from '../../reducers/selectors';
import Feed from './feed';

const mapStateToProps = ({user}, {match}) => {
  const receiverId = parseInt(match.params.userId);

  return {
    posts: valuesArray(user.posts),
    receiverId,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: userId => dispatch(fetchWallPosts(userId)),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed));
