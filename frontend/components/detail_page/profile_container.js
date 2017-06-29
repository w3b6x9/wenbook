import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  requestSingleUser,
  updateSingleUserImage,
} from '../../actions/user_actions';
import {
  fetchSentRequests,
  requestPendingRequests,
} from '../../actions/friendship_actions';
import Profile from './profile';
import { valuesArray } from '../../reducers/selectors';

const mapStateToProps = ({user, session, friendship}, {match}) => {
  const userId = parseInt(match.params.userId);

  return {
    user,
    currentUserId: session.currentUser.id,
    userId,
    friends: valuesArray(user.friends),
    sentRequests: valuesArray(friendship.sentRequests),
    receivedRequests: valuesArray(friendship.receivedRequests),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestSingleUser: id => dispatch(requestSingleUser(id)),
    updateSingleUserImage: (userId, imageData) => dispatch(
      updateSingleUserImage(userId, imageData)),
    fetchSentRequests: () => dispatch(fetchSentRequests()),
    requestPendingRequests: () => dispatch(requestPendingRequests()),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile));
