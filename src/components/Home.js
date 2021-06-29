import React from 'react'

// todos
import TodoList from './todos/TodoList'
import CreateTodos from './todos/CreateTodos'

// hooks
import { useLocalStorage } from '../hooks/useLocalStorage'

export default function Home() {
  // state
  const [todos, setTodos] = useLocalStorage({ key: 'todos', initialValue: [] })
  const [toggleActions, setToggleActions] = useLocalStorage({
    key: 'toggleActions',
    initialValue: false,
  })

  // method
  const DeleteTodos = ({ id }) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id)
    })

    console.log('successfully deleted data', id)
  }

  const UpdateTodos = ({ id, title }) => {
    console.log('successfully update data')
  }

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-7 order-2 order-md-1">
            {todos.length >= 1 && (
              <form method="post">
                <div className="form-check form-switch mb-3 d-flex justify-content-end align-items-center">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="toggleActions"
                    checked={toggleActions}
                    onChange={() =>
                      setToggleActions(
                        (prevToggleActions) => !prevToggleActions
                      )
                    }
                  />
                  <label
                    className="form-check-label ms-1"
                    htmlFor="toggleActions"
                  >
                    actions
                  </label>
                </div>
              </form>
            )}

            <h5 className="my-4">Your To-Do</h5>
            <ul className="list-group list-group-flush rounded">
              {todos
                .filter((todo) => !todo.complete)
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
          </div>

          <div className="col-md order-1 order-md-2">
            <CreateTodos todos={todos} setTodos={setTodos} />
          </div>
        </div>
      </div>
    </>
  )
}
