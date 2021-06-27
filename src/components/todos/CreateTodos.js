import React, { useRef, useState } from 'react'

export default function CreateTodos({ todos, setTodos }) {
  const todosForm = useRef(null)
  const [disableBtn, setDisableBtn] = useState(true)

  function createTodos(e) {
    e.preventDefault()
    const form = todosForm.current

    setTodos([...todos, { title: form['todo'].value, timestamp: Date.now() }])

    form['todo'].value = ''
  }

  return (
    <form method="post" onSubmit={createTodos} ref={todosForm}>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="create a new todo.."
          name="todo"
          onChange={(e) =>
            e.target.value ? setDisableBtn(false) : setDisableBtn(true)
          }
        />
        <button type="submit" className="btn btn-primary" disabled={disableBtn}>
          Add Todo
        </button>
      </div>
    </form>
  )
}
