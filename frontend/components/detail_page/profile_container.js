import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  requestSingleUser,
  updateSingleUserImage,
} from '../../actions/user_actions';
import Profile from './profile';

const mapStateToProps = ({user, friends}, {match}) => {
  const userId = parseInt(match.params.userId);
  return {
    user,
    userId,
    friends,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestSingleUser: id => dispatch(requestSingleUser(id)),
    updateSingleUserImage: (userId, imageData) => dispatch(
      updateSingleUserImage(userId, imageData)),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile));
