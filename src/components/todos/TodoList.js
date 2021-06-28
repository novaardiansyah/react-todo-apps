import React, { useState } from 'react'
import '../../assets/scss/components/todos/TodoList.scss'

export default function TodoList({ todo, DeleteTodos, UpdateTodos }) {
  const [showIcons, setShowIcons] = useState(false)

  return (
    <>
      <li
        className="d-flex align-items-center py-3 justify-content-between 
        list-group-item bg-cl-dark text-cl-light shadow"
        key={todo.timestamp}
        onMouseEnter={(e) => setShowIcons(true)}
        onMouseLeave={(e) => setShowIcons(false)}
      >
        {todo.title}

        <span className={showIcons ? '' : 'd-none'}>
          <button
            class="btn p-1 pe-0"
            data-bs-toggle="modal"
            data-bs-target={'#updateTodos' + todo.timestamp}
          >
            <i className="fas fa-fw fa-edit text-info"></i>
          </button>
          <button
            class="btn p-1 pe-0"
            onClick={(e) => DeleteTodos({ id: todo.timestamp })}
          >
            <i className="fas fa-fw fa-trash text-danger"></i>
          </button>
        </span>
      </li>

      <div
        className="modal fade"
        id={'updateTodos' + todo.timestamp}
        tabIndex="-1"
        aria-labelledby={'updateTodos' + todo.timestamp + 'Label'}
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content text-cl-dark">
            <div className="modal-header bg-primary text-cl-light">
              <h5
                className="modal-title"
                id={'updateTodos' + todo.timestamp + 'Label'}
              >
                Update Your To-do
              </h5>
              <button
                className="btn pe-0"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="fas fa-lg fa-fw fa-times text-cl-light"></i>
              </button>
            </div>
            <div className="modal-body">{todo.title}</div>
          </div>
        </div>
      </div>
    </>
  )
}
