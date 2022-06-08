import React, { Component } from 'react';

class Status extends Component {
  state = {
    status: 'Online',
  };

  componentDidMount() {
    window.addEventListener('offline', this.offlineHandler);
    window.addEventListener('online', this.onlineHandler);
  }

  offlineHandler = e => {
    this.setState({
      status: 'Offline',
    });
  };

  onlineHandler = () => {
    this.setState({
      status: 'Online',
    });
  };

  render() {
    return <div className="status ">{this.state.status}</div>;
  }
}
export default Status;
