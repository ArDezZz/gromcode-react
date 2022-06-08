import React, { Component } from 'react';

class ConnectionStatus extends Component {
  state = {
    isOnline: true,
  };

  componentDidMount() {
    window.addEventListener('offline', this.offlineHandler);
    window.addEventListener('online', this.onlineHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('offline', this.offlineHandler);
    window.removeEventListener('online', this.onlineHandler);
  }

  offlineHandler = () => {
    this.setState({
      isOnline: false,
    });
  };

  onlineHandler = () => {
    this.setState({
      isOnline: true,
    });
  };

  render() {
    return this.state.isOnline !== true ? (
      <div className="status status_offline">offline</div>
    ) : (
      <div className="status ">online</div>
    );
  }
}

export default ConnectionStatus;
