import React, { ReactPropTypes } from 'react'
import Todo from './Todo'

function TodoList({ todos, onTodoClick }) {
  return (
    <ul>
      {
        todos.map(item => {
          return <Todo key={item.id}
            onClick={() => onTodoClick(item.id)}
            {...item}
          />
        })
      }
    </ul>
  )
}
TodoList.propTypes = {
  todos: ReactPropTypes.arrayOf(ReactPropTypes.shape({
    id: ReactPropTypes.number.isRequired,
    completed: ReactPropTypes.bool.isRequired,
    text: ReactPropTypes.bool.isRequired,
  }).isRequired).isRequired,
  onTodoClick: ReactPropTypes.func.isRequired,
}

export default TodoList
