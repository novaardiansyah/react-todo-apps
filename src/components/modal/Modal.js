import React from 'react'

export default function Modal({ children, id, textColor }) {
  return (
    <div
      className="modal fade"
      id={id}
      tabIndex="-1"
      aria-labelledby={id + 'Label'}
      aria-hidden="true"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
    >
      <div className="modal-dialog">
        <div className={`modal-content ${textColor || 'text-dark'}`}>
          {children}
        </div>
      </div>
    </div>
  )
}
