import React, { Component } from 'react';
import Task from './Task';
import CreateTaskInput from './CreateTaskInput';

const baseUrl = 'https://627ea7fc271f386ceffbc3ba.mockapi.io/api/v1/Project';

class TasksList extends Component {
  state = {
    tasks: [],
  };

  onCreate = text => {
    //1. + Create task obj
    //2. + Post obj to server
    //3. + Fetch list from server

    const newTask = {
      text,
      done: false,
    };

    fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;utc-8',
      },
      body: JSON.stringify(newTask),
    }).then(response => {
      if (response.ok) {
        fetch(baseUrl)
          .then(res => {
            if (res.ok) {
              return res.json();
            }
          })
          .then(tasksList => {
            this.setState({
              tasks: tasksList,
            });
          });
      } else {
        throw new Error('Failed to create task');
      }
    });
  };

  handleTaskStatusChange = id => {
    //1. find task in the list
    //2.toogle done value
    //3 save updated list
    const updatedTasks = this.state.tasks.map(task => {
      if (task.id === id) {
        return {
          ...task,
          done: !task.done,
        };
      }
      return task;
    });
    this.setState({
      tasks: updatedTasks,
    });
  };

  handleTaskDelete = id => {
    //1.filter tasks
    //2. updated state
    const updatedTasks = this.state.tasks.filter(task => task.id !== id);
    this.setState({
      tasks: updatedTasks,
    });
  };

  render() {
    const sortedLit = this.state.tasks.slice().sort((a, b) => a.done - b.done);
    return (
      <div className="todo-list">
        <CreateTaskInput onCreate={this.onCreate} />
        <ul className="list">
          {sortedLit.map(task => (
            <Task
              key={task.id}
              {...task}
              onChange={this.handleTaskStatusChange}
              onDelete={this.handleTaskDelete}
            />
          ))}
        </ul>
      </div>
    );
  }
}
export default TasksList;
