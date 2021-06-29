import React, { useRef, useState } from 'react'

export default function CreateTodos({ todos, setTodos }) {
  // state
  const [disableBtn, setDisableBtn] = useState(true)

  // ref
  const todoRef = useRef('')

  // method
  const createTodos = (e) => {
    e.preventDefault()

    setTodos([
      ...todos,
      {
        id: Date.now(),
        title: todoRef.current.value,
        timestamp: Date.now(),
        complete: false,
      },
    ])

    todoRef.current.value = ''
    setDisableBtn(true)
  }

  return (
    <form method="post" onSubmit={createTodos}>
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
        <button type="submit" className="btn btn-primary" disabled={disableBtn}>
          Add Todo
        </button>
      </div>
    </form>
  )
}
