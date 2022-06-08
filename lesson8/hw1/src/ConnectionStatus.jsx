import React, { Component } from 'react';

class ConnectionStatus extends Component {
  state = {
    status: 'online',
  };

  componentDidMount() {
    window.addEventListener('offline', this.offlineHandler);
    window.addEventListener('online', this.onlineHandler);
  }

  offlineHandler = () => {
    const elem = document.querySelector('.status');
    elem.classList.add('status_offline');
    this.setState({
      status: 'offline',
    });
  };

  onlineHandler = () => {
    const elem = document.querySelector('.status');
    elem.classList.remove('status_offline');
    this.setState({
      status: 'online',
    });
  };

  render() {
    return <div className="status ">{this.state.status}</div>;
  }
}
export default ConnectionStatus;
