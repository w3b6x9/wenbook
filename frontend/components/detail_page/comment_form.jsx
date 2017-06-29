import React from 'react';

export default class CommentForm extends React.Component {
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
    if (e.key === 'Enter') {
      e.preventDefault();
      this.props.createComment(this.props.postId, this.state)
      .then(() => this.setState({ body: '' }));
    }
  }

  render() {
    const { profile_picture } = this.props.currentUser;

    return (
      <div className='comment-form-container'>
        <img src={ profile_picture } className='comment-pic' />
        <form onKeyPress={ this.handleSubmit } className='comment-form'>
          <textarea
            placeholder='Write a comment...'
            className='comment-input'
            onChange={ this.handleChange }
            value={ this.state.body }
            />
        </form>
      </div>
    );
  }
}
