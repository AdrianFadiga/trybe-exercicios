import React from 'react';
const tasksList = ['Estudar', 'Alongar', 'Batataço na Tati'];

class Task extends React.Component {
  render () {
    return (
      <ol>
        {tasksList.map((task) => <li>{task}</li>)}
      </ol>
    )
  }
}

export default Task;