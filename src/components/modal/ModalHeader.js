import React from 'react'

export default function ModalHeader({
  children,
  id,
  title,
  bgColor,
  textColor,
}) {
  return (
    <div
      className={`modal-header ${bgColor || 'bg-primary'} 
        ${textColor || 'text-light'}`}
    >
      <h5 className="modal-title" id={id + 'Label'}>
        {title}
      </h5>
      <button className="btn pe-0" data-bs-dismiss="modal" aria-label="Close">
        <i
          className={`fas fa-lg fa-fw fa-times ${textColor || 'text-light'}`}
        ></i>
      </button>
    </div>
  )
}
