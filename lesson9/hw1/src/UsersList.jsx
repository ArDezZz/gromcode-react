import React, { Component } from 'react';
import User from './User';
import Filter from './Filter';

class UsersList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filterText: '',
    };
  }

  filterUsers = () =>
    this.props.users.filter(user =>
      user.name.toUpperCase().includes(this.state.filterText.toUpperCase()),
    );

  onChange = event => {
    this.setState = {
      filterText: event.target.filterText,
    };
  };

  render() {
    return (
      <div>
        <Filter
          count={this.filterUsers().length}
          onChange={this.onChange}
          filterText={this.state.filterText}
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
