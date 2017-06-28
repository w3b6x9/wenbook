import React from 'react';

export default class Postform extends React.Component {
  constructor(props) {
    super(props);

    this.state = { body: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ body: e.target.value });
  }

  handleSubmit(e) {
    const post = Object.assign(
      {},
      this.state,
      { receiver_id: this.props.receiverId }
    );
    e.preventDefault();
    this.props.createWallPost(post)
      .then(() => this.setState({ body: '' }));
  }

  render() {
    const { profile_picture } = this.props.currentUser;

    return (
      <div className='post-form'>
        <div className='post-header'>
          <div className='post-title'>
            <i className="fa fa-pencil pencil-icon" aria-hidden="true" />
            <div className='post-title-text'>Post</div>
          </div>
          <div className='form-section'>
            <div className='author-pic-section'>
              <div className='author_pic'>
                <img src={ profile_picture } className='author-pic' />
              </div>
            </div>
            <form className='form-box'>
              <textarea
                className='post-input'
                onChange={ this.handleChange }
                value={ this.state.body }
                />
            </form>
          </div>
          <div className='post-form-footer'>
            <input type='submit'
              className='submit-btn'
              onClick={ this.handleSubmit }
              value='Post' />
          </div>
        </div>
      </div>
    );
  }
}
