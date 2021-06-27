import React from 'react'
import '../../assets/scss/components/todos/TodoList.scss'

export default function TodoList({ todo }) {
  return (
    <li
      className="list-group-item bg-cl-dark text-cl-light shadow py-3"
      key={todo.timestamp}
    >
      {todo.title}
    </li>
  )
}
