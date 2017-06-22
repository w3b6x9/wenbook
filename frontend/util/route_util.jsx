import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';
import HomePageContainer from '../components/home_page/home_page_container';

const Auth = ({ component: Component, path, signedIn }) => {
  return (
    <Route path={ path } render={props => (
      !signedIn ? (
        <Component { ...props } />
      ) : (
        <HomePageContainer />
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
