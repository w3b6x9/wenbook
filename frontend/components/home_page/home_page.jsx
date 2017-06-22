import React from 'react';
import NavigationBar from './navigation_bar';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <NavigationBar />
      </div>
    );
  }
}
