import React, { Component } from 'react';

class GoodButton extends Component {
  handeClick(e) {
    alert(e.target.textContent);
  }
  render() {
    return (
      <button className="fancy-button" onClick={this.handeClick}>
        Click me!
      </button>
    );
  }
}

export default GoodButton;
