import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import InfoPanel from './info_panel';

const mapStateToProps = ({user}) => {
  return {
    user,
  };
};

export default withRouter(connect(mapStateToProps)(InfoPanel));
