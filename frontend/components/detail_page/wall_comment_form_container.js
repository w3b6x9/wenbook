import { connect } from 'react-redux';
import { createComment } from '../../actions/comment_actions';
import CommentForm from './comment_form';

const mapStateToProps = ({ session }) => {
  return {
    currentUser: session.currentUser,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createComment: (postId, comment) => dispatch(createComment(postId, comment)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentForm);
