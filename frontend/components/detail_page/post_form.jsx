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
    this.props.createWallPost(post);
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <input type='text' onChange={ this.handleChange } />
        <input type='submit' value='Post' />
      </form>
    );
  }
}
