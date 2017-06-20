import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';
import HomePage from '../components/home_page/home_page';

const Auth = ({ component: Component, path, signedIn }) => {
  return (
    <Route path={ path } render={props => (
      !signedIn ? (
        <Component { ...props } />
      ) : (
        <HomePage />
      )
    )} />
  );
};

const mapStateToProps = ({session}) => {
  return {
    signedIn: Boolean(session.currentUser),
  };
};

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
