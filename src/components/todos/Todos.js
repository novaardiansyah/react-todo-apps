import React from 'react'
// todos
import TodoList from './TodoList'

export default function Todos({ title, todos }) {
  return (
    <>
      <h5 className="my-4">{title}</h5>
      <ul className="list-group list-group-flush rounded">
        {todos
          .map((todo) => (
            <TodoList
              key={todo.id}
              todo={todo}
            />
          ))}
      </ul>
    </>
  )
}
