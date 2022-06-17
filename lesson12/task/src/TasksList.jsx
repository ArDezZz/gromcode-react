import React, { Component } from 'react';
import Task from './Task';
import CreateTaskInput from './CreateTaskInput';

class TasksList extends Component {
  state = {
    tasks: [
      { text: 'Buy milk', done: false, id: 1 },
      { text: 'Pick up Tom', done: false, id: 2 },
      { text: 'Visit party', done: false, id: 3 },
      { text: 'Visit doctor', done: true, id: 4 },
      { text: 'Buy meat', done: true, id: 5 },
    ],
  };

  onCreate = text => {
    const { tasks } = this.state;
    const newTask = {
      id: Math.random(),
      text,
      done: false,
    };

    const updatedTasks = tasks.concat(newTask);
    this.setState({
      tasks: updatedTasks,
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
