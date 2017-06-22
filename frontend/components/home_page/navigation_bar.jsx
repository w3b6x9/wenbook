import React from 'react';
import MenuDropdownContainer from './menu_dropdown_container';

export default class NavigationBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showDropdown: false,
    };

    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick() {
    if (this.state.showDropdown === true) {
      this.setState({ showDropdown: false })
    } else {
      this.setState({ showDropdown: true })
    }
  }

  render() {
    return (
      <div className='signed-in-nav'>
        <div>
          [left-side]
        </div>
        <div>
          <i className="fa fa-caret-down"
            onClick={this.onButtonClick}
            aria-hidden="true" />
          <div>
            { this.state.showDropdown ? <MenuDropdownContainer /> : null }
          </div>
        </div>
      </div>
    )
  }
}
