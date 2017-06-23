import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LandingPage from './landing_page/landing_page';
import HomePage from './home_page/home_page';
import DetailPageContainer from './detail_page/detail_page_container';
import NavigationBarContainer from './home_page/navigation_bar_container';

const App = props => {
  return (
    <div id='window' onClick={() => props.clearDropdown()}>
      <AuthRoute exact path='/' component={ LandingPage } />
      <ProtectedRoute path='/' component={ NavigationBarContainer } />
      <Switch>
        <ProtectedRoute exact path='/' component={ HomePage } />
        <ProtectedRoute path='/users/:userId' component={ DetailPageContainer } />
      </Switch>
    </div>
  );
};

export default App;
