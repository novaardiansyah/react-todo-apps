import React from 'react'

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
