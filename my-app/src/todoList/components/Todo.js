import React, { ReactPropTypes } from 'react'

function Todo({ onClick, completed, text }) {
  return (
    <li onClick={onClick}
      style={{ textDecoration: completed ? 'line-through' : 'none' }}
    >
      {text}
    </li>
  )
}
Todo.propTypes = {
  onClick: ReactPropTypes.func.isRequired,
  completed: ReactPropTypes.bool.isRequired,
  text: ReactPropTypes.bool.isRequired,
}

export default Todo
