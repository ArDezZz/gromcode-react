import React, { Component } from 'react';
import UserForm from './UserForm';

//1: отрисовывает UserForm ++
//2: метод createUser
//3: передать метод createUser в prop onSubmit UserForm
class App extends Component {
  createUser = users => {
    console.log(users);
  };

  render() {
    return <UserForm onSubmit={this.createUser} />;
  }
}

export default App;
