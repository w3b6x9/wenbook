import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createWallPost } from '../../actions/post_actions';
import PostForm from './post_form';

const mapStateToProps = ({session}, {match}) => {
  const pathId = parseInt(match.params.userId);
  const receiverId = isNaN(pathId) ? '' : pathId;

  return {
    currentUser: session.currentUser,
    receiverId,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createWallPost: post => dispatch(createWallPost(post)),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PostForm));
