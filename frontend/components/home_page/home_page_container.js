import { connect } from 'react-redux';
import HomePage from './home_page';

const mapStateToProps = ({ session }) => {
  return {
    currentUser: session.currentUser,
  };
};

export default connect(mapStateToProps)(HomePage);
