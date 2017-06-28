import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchAllFriends } from '../../actions/user_actions';
import { updatePendingRequest } from '../../actions/friendship_actions';
import ProfileFriends from './profile_friends';
import { valuesArray } from '../../reducers/selectors';

const mapStateToProps = ({user}, {match}) => {
  const userId = match.params.userId;

  return {
    friends: valuesArray(user.friends),
    userId,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllFriends: userId => dispatch(fetchAllFriends(userId)),
    updatePendingRequest: friendship =>
      dispatch(updatePendingRequest(friendship)),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileFriends));
