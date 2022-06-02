import React, { Component } from 'react';
import Online from './Online.jsx';
import Offline from './Offline.jsx';

// const Status = () => (
//   <div className="status">
//     <span className="status__text">Offline</span>
//     <button className="status__btn">Reconnect</button>
//   </div>
// );

class Status extends Component {
  constructor() {
    super();
    this.state = {
      isOnline: false,
    };
  }

  render() {
    if (!this.state.isOnline) {
      return <Offline />;
    }
    return <Online />;
  }
}
export default Status;
