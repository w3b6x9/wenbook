import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { requestSingleUser } from '../../actions/user_actions';
import DetailPage from './detail_page';

const mapStateToProps = ({user}, {match}) => {
  const userId = parseInt(match.params.userId);
  return {
    user,
    userId,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestSingleUser: id => dispatch(requestSingleUser(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailPage);
