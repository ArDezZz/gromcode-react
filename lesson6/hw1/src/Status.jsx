import React, { Component } from 'react';
import Online from './Online.jsx';
import Offline from './Offline.jsx';

// const Status = () => (
//   <div className="status">
//     <span className="status__text">Offline</span>
//     <button className="status__btn">Reconnect</button>
//   </div>
// );

const Status = props => {
  const { isOnline } = props;

  if (isOnline) {
    return <Online />;
  } else {
    return <Offline />;
  }
};
export default Status;
