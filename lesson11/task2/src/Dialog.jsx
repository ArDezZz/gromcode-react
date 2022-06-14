import React from 'react';

const Dialog = ({ children, title }) => {
  return (
    <div className="dialog">
      <div className="dialog__heading">
        <h4 className="dialog__title">{title}</h4>
        <button className="dialog__close-btn">+</button>
      </div>
      <div className="dialog__content">{children}</div>
    </div>
  );
};

export default Dialog;
