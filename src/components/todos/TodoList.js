import React, { useRef } from 'react'
// style
import '../../assets/scss/components/todos/TodoList.scss'
// modal
import Modal from '../modal/Modal'
import ModalHeader from '../modal/ModalHeader'
// contexts
import { useTodos } from '../../contexts/TodosProvider'

export default function TodoList({ todo }) {
  //ref
  const todoRef = useRef('')
  const idRef = useRef('')

  // value from contexts
  const { toggleActions, DeleteTodos, UpdateTodos } = useTodos()

  // method
  const handleUpdateTodos = (e) => {
    e.preventDefault()

    if (todoRef.current.value.length >= 5) {
      UpdateTodos({
        id: idRef.current.value,
        title: todoRef.current.value,
      })
    }

    return console.log('todo title must contain at least 5 characters')
  }

  return (
    <>
      <li
        className="d-flex align-items-center py-3 justify-content-between 
        list-group-item bg-cl-dark text-cl-light shadow"
        key={todo.id}
      >
        {todo.title}

        <button
          className={`btn btn__transparent p-1 pe-0 ${
            toggleActions ? 'd-none' : ''
          }`}
        >
          <i
            className={
              todo.complete
                ? 'fas fa-fw fa-check text-info'
                : 'far fa-fw fa-circle text-light'
            }
          ></i>
        </button>

        <span className={toggleActions ? '' : 'd-none'}>
          <button
            className="btn btn__transparent p-1 pe-0"
            data-bs-toggle="modal"
            data-bs-target={'#updateTodos' + todo.id}
          >
            <i className="fas fa-fw fa-edit text-info"></i>
          </button>
          <button
            className="btn btn__transparent p-1 pe-0"
            onClick={(e) => DeleteTodos({ id: todo.id })}
          >
            <i className="fas fa-fw fa-trash text-danger"></i>
          </button>
        </span>
      </li>

      <Modal id={'updateTodos' + todo.id}>
        <ModalHeader id={'updateTodos' + todo.id} title="Update Your To-Do" />
        <div className="modal-body">
          <form method="post" onSubmit={handleUpdateTodos}>
            <input type="hidden" ref={idRef} value={todo.id} />

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
