import React, { Component } from 'react';

class ConnectionStatus extends Component {
  state = {
    status: 'online',
  };

  componentDidMount() {
    window.addEventListener('offline', this.offlineHandler);
    window.addEventListener('online', this.onlineHandler);
  }

  offlineHandler = e => {
    this.setState({
      status: 'offline',
    });
  };

  onlineHandler = () => {
    this.setState({
      status: 'online',
    });
  };

  render() {
    return <div className="status ">{this.state.status}</div>;
  }
}
export default ConnectionStatus;
