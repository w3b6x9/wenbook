import { connect } from 'react-redux';
import {
  requestPendingRequests,
  updatePendingRequest,
} from '../../actions/friendship_actions';
import PendingRequests from './pending_requests';
import { valuesArray } from '../../reducers/selectors';

const mapStateToProps = ({friendship}) => {
  return {
    pending_requests: valuesArray(friendship.receivedRequests),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestPendingRequests: () => dispatch(requestPendingRequests()),
    updatePendingRequest: friendship => dispatch(updatePendingRequest(
      friendship)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PendingRequests);
