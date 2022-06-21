import React, { useEffect, useState } from 'react';

const ConnectionStatus = () => {
  const [isOnline, changeStatus] = useState(true);
  useEffect(() => {
    window.addEventListener('offline', () => changeStatus(false));
    window.addEventListener('online', () => changeStatus(true));

    return () => {
      window.removeEventListener('offline', () => changeStatus(false));
      window.removeEventListener('online', () => changeStatus(true));
    };
  }, []);

  return isOnline !== true ? (
    <div className="status status_offline">offline</div>
  ) : (
    <div className="status ">online</div>
  );
};

export default ConnectionStatus;
