import React, { Component } from 'react';
import User from './User';
import Filter from './Filter';

class UsersList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };
  }

  filterUsers = () =>
    this.props.users.filter(user =>
      user.name.toUpperCase().includes(this.state.value.toUpperCase()),
    );

  onChange = event => {
    this.setState = {
      value: event.target.value,
    };
  };

  render() {
    return (
      <div>
        <Filter
          filterText={this.state.value}
          count={this.filterUsers().length}
          onChange={this.onChange}
        />
        <ul className="users">
          {this.filterUsers().map(user => (
            <User name={user.name} age={user.age} key={user.id} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
