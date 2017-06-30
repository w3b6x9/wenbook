import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ProfileNavigation from './profile_navigation';
import { valuesArray } from '../../reducers/selectors';

const mapStateToProps = ({user}, {match}) => {
  const userId = parseInt(match.params.userId);

  return {
    userId,
    friendsCount: valuesArray(user.friends).length,
  };
};

export default withRouter(connect(
  mapStateToProps
)(ProfileNavigation));
