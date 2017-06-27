import { connect } from 'react-redux';
import { fetchAllFriends } from '../../actions/user_actions';
import FriendsPanel from './friends_panel';
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendsPanel);
