import React from 'react';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestSingleUser(this.props.userId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.userId !== nextProps.userId) {
      this.props.requestSingleUser(nextProps.userId);
    }
  }

  render() {
    return (
      <div>
        {this.props.user.first_name}
        <h1>Profile</h1>
      </div>
    );
  }
}
