import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LandingPage from './landing_page/landing_page';
import HomePage from './home_page/home_page';
import DetailPage from './detail_page/detail_page';
import NavigationBarContainer from './home_page/navigation_bar_container';

const App = props => {
  return (
    <div id='window' onClick={() => props.clearDropdown()}>
      <AuthRoute exact={true} path='/' component={ LandingPage } />
      <ProtectedRoute path='/' component={ NavigationBarContainer } />
      <ProtectedRoute exact={true} path='/' component={ HomePage } />
      <ProtectedRoute path='/profile/:userId' component={ DetailPage } />
      <ProtectedRoute path='/profile/:userId/about' component={ DetailPage } />
    </div>
  );
};

export default App;
