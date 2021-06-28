import React, { useState } from 'react'
import '../../assets/scss/components/todos/TodoList.scss'
// modal
import Modal from '../modal/Modal'
import ModalHeader from '../modal/ModalHeader'

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
            className="btn p-1 pe-0"
            data-bs-toggle="modal"
            data-bs-target={'#updateTodos' + todo.timestamp}
          >
            <i className="fas fa-fw fa-edit text-info"></i>
          </button>
          <button
            className="btn p-1 pe-0"
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
          {todo.title}
        </div>
      </Modal>
    </>
  )
}
