import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import LandingPage from './landing_page/landing_page';

const App = () => {
  return (
    <AuthRoute exact path='/' component={ LandingPage } />
  );
};

export default App;
