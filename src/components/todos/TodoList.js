import React, { useState } from 'react'
import '../../assets/scss/components/todos/TodoList.scss'

export default function TodoList({ todo, DeleteTodos, UpdateTodos }) {
  const [showIcons, setShowIcons] = useState(false)

  return (
    <li
      className="d-flex align-items-center py-3 justify-content-between 
        list-group-item bg-cl-dark text-cl-light shadow"
      key={todo.timestamp}
      onMouseEnter={(e) => setShowIcons(true)}
      onMouseLeave={(e) => setShowIcons(false)}
    >
      {todo.title}

      <span className={showIcons ? '' : 'd-none'}>
        <i
          className="fas fa-fw fa-edit text-info me-1"
          onClick={(e) => UpdateTodos({ id: todo.timestamp })}
        ></i>
        <i
          className="fas fa-fw fa-trash text-danger"
          onClick={(e) => DeleteTodos({ id: todo.timestamp })}
        ></i>
      </span>
    </li>
  )
}
