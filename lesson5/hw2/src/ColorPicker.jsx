import React, { Component } from 'react';

class ColorPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }

  switchColorText = text => {
    this.setState({
      color: (this.state.title = text),
    });
  };

  clearText = () => {
    this.setState({
      color: (this.state.title = ''),
    });
  };

  render() {
    return (
      <div>
        <div className="picker__title">{this.state.title}</div>
        <div>
          <button
            onMouseOver={() => this.switchColorText('Coral')}
            onMouseOut={() => this.clearText()}
            className="picker__button picker__button_coral"
          ></button>
          <button
            onMouseOut={() => this.clearText()}
            onMouseOver={() => this.switchColorText('Aqua')}
            className="picker__button picker__button_aqua"
          ></button>
          <button
            onMouseOut={() => this.clearText()}
            onMouseOver={() => this.switchColorText('Bisque')}
            className="picker__button picker__button_bisque"
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
