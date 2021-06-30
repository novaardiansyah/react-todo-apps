import React from 'react'

// todos
import Todos from './todos/Todos'
// contexts
import { useTodos } from '../contexts/TodosProvider'

export default function Home() {
  // value from contexts
  const {
    todos,
    toggleActions,
    setToggleActions,
    todoRef,
    disableBtn,
    setDisableBtn,
    CreateTodos,
  } = useTodos()

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

            {notCompleteTodos.length >= 1 && (
              <Todos title="Your Daily To-Dos" todos={notCompleteTodos} />
            )}

            {completeTodos.length >= 1 && (
              <Todos title="Your Complete To-Dos" todos={completeTodos} />
            )}
          </div>

          <div className="col-md order-1 order-md-2">
            <form method="post" onSubmit={CreateTodos}>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="create a new todo.."
                  name="todo"
                  ref={todoRef}
                  onChange={() =>
                    todoRef.current.value.length >= 5
                      ? setDisableBtn(false)
                      : setDisableBtn(true)
                  }
                />
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={disableBtn}
                >
                  Add Todo
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
