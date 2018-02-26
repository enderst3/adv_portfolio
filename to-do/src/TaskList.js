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
      />
    )
  })

  return (
    <ListGroup className='TaskList'>
      <br />
      {TaskData}
    </ListGroup>
  )
}

export default TaskList