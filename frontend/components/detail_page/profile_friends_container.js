import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchAllFriends } from '../../actions/user_actions';
import ProfileFriends from './profile_friends';
import { valuesArray } from '../../reducers/selectors';

const mapStateToProps = ({user}) => {
  return {
    friends: valuesArray(user.friends),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllFriends: () => dispatch(fetchAllFriends()),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileFriends));
