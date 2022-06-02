import React from 'react';

const Login = props => {
  const { onLogin } = props;

  return (
    <button className="btn login" onClick={onLogin}>
      Login
    </button>
  );
};

export default Login;
