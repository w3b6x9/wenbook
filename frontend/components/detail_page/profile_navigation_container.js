import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ProfileNavigation from './profile_navigation';

const mapStateToProps = (state, {match}) => {
  const userId = parseInt(match.params.userId);
  return {
    userId,
  };
};

export default withRouter(connect(
  mapStateToProps
)(ProfileNavigation));
