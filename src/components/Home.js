import React, { useState } from 'react'
// todos
import TodoList from './todos/TodoList'
import CreateTodos from './todos/CreateTodos'

export default function Home() {
  const [todos, setTodos] = useState([])

  const DeleteTodos = ({ id }) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.timestamp !== id)
    })

    console.log('successfully deleted data', id)
  }

  const UpdateTodos = ({ id }) => {
    console.log('successfully update data', id)
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-7 order-2 order-md-1">
          <ul className="list-group list-group-flush rounded">
            {todos.map((todo) => (
              <TodoList
                key={todo.timestamp}
                todo={todo}
                DeleteTodos={DeleteTodos}
                UpdateTodos={UpdateTodos}
              />
            ))}
          </ul>
        </div>

        <div className="col-md order-1 order-md-2">
          <CreateTodos todos={todos} setTodos={setTodos} />
        </div>
      </div>
    </div>
  )
}
