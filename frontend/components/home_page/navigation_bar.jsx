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
    const { first_name, profile_picture, id } = this.props.currentUser;

    return (
      <div className='signed-in-nav'>
        <div className='active-section'>
          <div className='nav-section-left'>
            <Link exact to={'/'} replace>
              <i className='fa fa-facebook-official icon-normal' aria-hidden="true" />
            </Link>
            <input className='nav-search'
              type='text'
              placeholder='Search WenBook' />
            <button className='search-btn'>
              <i className="fa fa-search search-icon" aria-hidden="true" />
            </button>
          </div>
          <div className='nav-section-right'>
            <div className='nav-right-mid'>
              <Link to={ '/profile/' + id }
                className='nav-profile-link'
                replace
              >
                <img className='nav-pic' src={ profile_picture } />
                <div className='nav-user-name'>
                  { first_name }
                </div>
              </Link>
              <div className='pipe-mid'>
                |
              </div>
              <div>
                <Link to='/' className='home-btn' replace>Home</Link>
              </div>
            </div>
            <div>
              <Link to='/friends/requests' replace>
                <i className="fa fa-users icon-small" aria-hidden="true" />
              </Link>
            </div>
            <div>
              <i className="fa fa-commenting icon-small" aria-hidden="true" />
            </div>
            <div>
              <i className="fa fa-globe icon-small" aria-hidden="true" />
            </div>
            <div className='pipe'>
              |
            </div>
            <div>
              <i className='fa fa-question-circle icon-small' aria-hidden="true" />
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
