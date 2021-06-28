import React from 'react'

export default function Modal({ children, id, textColor }) {
  return (
    <div
      className="modal fade"
      id={id}
      tabIndex="-1"
      aria-labelledby={id + 'Label'}
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className={`modal-content ${textColor || 'text-dark'}`}>
          {children}
        </div>
      </div>
    </div>
  )
}
