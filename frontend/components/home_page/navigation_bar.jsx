import React from 'react';
import { Link } from 'react-router-dom';

export default class NavigationBar extends React.Component {
  constructor(props) {
    super(props);

    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick(e) {
    e.stopPropagation();
    if (this.props.visible) {
      this.props.clearDropdown();
    } else {
      this.props.displayDropdown();
    }
  }

  render() {
    return (
      <div className='signed-in-nav'>
        <div className='active-section'>
          <div>
            <i className='fa fa-facebook-official icon-normal' aria-hidden="true"></i>
          </div>
          <div className='nav-section-right'>
            <div>
              <Link to='/' className='home-btn'>Home</Link>
            </div>
            <div>
              <i className="fa fa-users icon-small" aria-hidden="true"></i>
            </div>
            <div>
              <i className="fa fa-commenting icon-small" aria-hidden="true"></i>
            </div>
            <div>
              <i className="fa fa-globe icon-small" aria-hidden="true"></i>
            </div>
            <div className='pipe'>
              |
            </div>
            <div>
              <i className='fa fa-question-circle icon-small' aria-hidden="true"></i>
            </div>
            <div className='menu-section'>
              <div>
                <i className='fa fa-caret-down icon-small'
                  onClick={this.onButtonClick}
                  aria-hidden="true" />
              </div>
              <div>
                { this.props.visible ? <this.props.menu /> : null }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
