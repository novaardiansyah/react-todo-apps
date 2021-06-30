import React from 'react'

// todos
import CreateTodos from './todos/CreateTodos'
import Todos from './todos/Todos'
// contexts
import { useTodos } from '../contexts/TodosProvider'

export default function Home() {
  // value from contexts
  const { todos, setTodos, toggleActions, setToggleActions } = useTodos()

  // todos is divided into two parts:
  const completeTodos = todos.filter((todo) => todo.complete)
  const notCompleteTodos = todos.filter((todo) => !todo.complete)

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

            <Todos title="Your Daily To-Dos" todos={notCompleteTodos} />
            <Todos title="Your Complete To-Dos" todos={completeTodos} />
          </div>

          <div className="col-md order-1 order-md-2">
            <CreateTodos todos={todos} setTodos={setTodos} />
          </div>
        </div>
      </div>
    </>
  )
}
