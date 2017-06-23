import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';
import HomePage from '../components/home_page/home_page';
import LandingPage from '../components/landing_page/landing_page';

const Auth = ({ component: Component, path, signedIn, exact }) => (
  <Route exact={exact} path={path} render={(props) => (
    !signedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to='/' />
    )
  )} />
);

const Protected = ({ component: Component, path, signedIn, exact }) => (
  <Route exact={exact} path={path} render={(props) => (
     signedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to='/' />
    )
  )} />
);

const mapStateToProps = ({session}) => {
  return {
    signedIn: Boolean(session.currentUser),
  };
};

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
