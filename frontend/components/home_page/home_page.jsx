import React from 'react';
import NavigationBarContainer from './navigation_bar_container';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <NavigationBarContainer />
      </div>
    );
  }
}
