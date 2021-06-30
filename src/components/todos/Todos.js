import React from 'react'
// todos
import TodoList from './TodoList'
// contexts
import { useTodos } from '../../contexts/TodosProvider'

export default function Todos({ title, todos }) {
  // value from contexts
  const { toggleActions, DeleteTodos, UpdateTodos } = useTodos()
  
  return (
    <>
      <h5 className="my-4">{title}</h5>
      <ul className="list-group list-group-flush rounded">
        {todos
          .map((todo) => (
            <TodoList
              key={todo.id}
              todo={todo}
              DeleteTodos={DeleteTodos}
              UpdateTodos={UpdateTodos}
              toggleActions={toggleActions}
            />
          ))}
      </ul>
    </>
  )
}
