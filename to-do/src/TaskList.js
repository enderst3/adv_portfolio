import React from 'react'
import TaskListItem from './TaskListItem'
import { ListGroup } from 'react-bootstrap'


const TaskList = (props) => {
  const TaskData = props.items.map((item) => {
    return (
      <TaskListItem
        key={item.id}
        item={item}
        removeItem={props.removeItem}
        editTask={props.editTask}
        addTaskInput={props.addTaskInput}
        submitEditedTask={props.submitEditedTask}
        cancelEditing={props.cancelEditing}
        isEditing={props.isEditing}
      />
    )
  })

  return (
    <div>
      <ListGroup className='TaskList'>
      <br />
      {TaskData}
      </ListGroup>
    </div>
  )
}

export default TaskList