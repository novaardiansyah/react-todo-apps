import React, { useRef } from 'react'

// style
import '../../assets/scss/components/todos/TodoList.scss'

// modal
import Modal from '../modal/Modal'
import ModalHeader from '../modal/ModalHeader'

export default function TodoList({
  todo,
  DeleteTodos,
  UpdateTodos,
  toggleActions,
}) {
  //ref
  const todoRef = useRef('')
  const timestampRef = useRef('')

  // method
  const handleUpdateTodos = (e) => {
    e.preventDefault()

    UpdateTodos({
      id: timestampRef.current.value,
      title: todoRef.current.value,
    })
  }

  return (
    <>
      <li
        className="d-flex align-items-center py-3 justify-content-between 
        list-group-item bg-cl-dark text-cl-light shadow"
        key={todo.timestamp}
      >
        {todo.title}

        <span className={toggleActions ? '' : 'd-none'}>
          <button
            className="btn btn__transparent p-1 pe-0"
            data-bs-toggle="modal"
            data-bs-target={'#updateTodos' + todo.timestamp}
          >
            <i className="fas fa-fw fa-edit text-info"></i>
          </button>
          <button
            className="btn btn__transparent p-1 pe-0"
            onClick={(e) => DeleteTodos({ id: todo.timestamp })}
          >
            <i className="fas fa-fw fa-trash text-danger"></i>
          </button>
        </span>
      </li>

      <Modal id={'updateTodos' + todo.timestamp}>
        <ModalHeader
          id={'updateTodos' + todo.timestamp}
          title="Update Your To-Do"
        />
        <div className="modal-body">
          <form method="post" onSubmit={handleUpdateTodos}>
            <input type="hidden" ref={timestampRef} value={todo.timestamp} />

            <div className="mb-3">
              <textarea
                rows="3"
                className="form-control"
                defaultValue={todo.title}
                ref={todoRef}
              ></textarea>
            </div>

            <div className="text-end">
              <button
                className="btn btn-secondary me-2"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                cancel
              </button>
              <button type="submit" className="btn btn-primary">
                update
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  )
}
