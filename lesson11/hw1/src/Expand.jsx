import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';

class Expand extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    isOpen: false,
  };
  showHandler = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };
  render() {
    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{this.props.title}</span>
          <button className="expand__toggle-btn" onClick={this.showHandler}>
            <i className={`fa fa-solid fa-angle-${!this.state.isOpen ? 'down' : 'up'}`}></i>
          </button>
        </div>
        {!this.state.isOpen ? null : <div className="expand__content">{this.props.children}</div>}
      </div>
    );
  }
}

export default Expand;
