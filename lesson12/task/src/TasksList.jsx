import React, { Component } from 'react';
import Task from './Task';
import CreateTaskInput from './CreateTaskInput';
import { createTask, fetchTasksList, updateTask, deleteTask } from './tasksGateway';

const baseUrl = 'https://627ea7fc271f386ceffbc3ba.mockapi.io/api/v1/Project';

class TasksList extends Component {
  state = {
    tasks: [],
  };

  componentDidMount() {
    this.fetchTasks();
  }

  fetchTasks = () => {
    fetchTasksList().then(tasksList => {
      this.setState({
        tasks: tasksList,
      });
    });
  };

  onCreate = text => {
    //1. + Create task obj
    //2. + Post obj to server
    //3. + Fetch list from server

    const newTask = {
      text,
      done: false,
    };

    createTask(newTask).then(() => this.fetchTasks());
  };

  handleTaskStatusChange = id => {
    //1. find task in the list
    //2.toogle done value
    //3 save updated list

    //1. find task in state
    //2. create updated task
    //3. update task on server
    //4. fetch updated tasks list
    const { done, text } = this.state.tasks.find(task => task.id === id);
    const updatedTasks = {
      text,
      done: !done,
    };

    updateTask(id, updatedTasks).then(() => this.fetchTasks());
  };

  handleTaskDelete = id => {
    //1.filter tasks
    //2. updated state
    deleteTask(id).then(() => this.fetchTasks());
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
