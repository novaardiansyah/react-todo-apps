import React from 'react'

export default function Modal({ children }) {
  return (
    <div
      className="modal fade"
      id="myModal"
      tabIndex="-1"
      aria-labelledby="myModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content text-cl-dark">{children}</div>
      </div>
    </div>
  )
}
