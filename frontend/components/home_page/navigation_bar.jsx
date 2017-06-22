import React from 'react';

export default class NavigationBar extends React.Component {
  constructor(props) {
    super(props);

    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick(e) {
    e.stopPropagation();
    this.props.displayDropdown(this.props.menu);
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
            { this.props.visible ? <this.props.menu /> : null }
          </div>
        </div>
      </div>
    )
  }
}
