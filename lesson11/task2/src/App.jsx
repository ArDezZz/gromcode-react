import React, { Component } from 'react';
import Dialog from './Dialog';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Dialog title="some title">
          <p>Some text</p>
        </Dialog>
      </div>
    );
  }
}

export default App;
