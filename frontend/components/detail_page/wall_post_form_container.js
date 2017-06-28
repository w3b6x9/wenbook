import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createWallPost } from '../../actions/post_actions';
import PostForm from './post_form';

const mapStateToProps = ({session}, {match}) => {
  const receiverId = match.params.userId;

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
