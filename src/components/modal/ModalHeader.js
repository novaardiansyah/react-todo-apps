import React from 'react'

export default function ModalHeader({ children }) {
  return (
    <div className="modal-header bg-primary text-cl-light">
      <h5 className="modal-title" id="myModalLabel">
        Modal Title
      </h5>
      <button className="btn pe-0" data-bs-dismiss="modal" aria-label="Close">
        <i className="fas fa-lg fa-fw fa-times text-cl-light"></i>
      </button>
    </div>
  )
}
