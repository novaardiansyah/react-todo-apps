import React from 'react'
import { Link } from 'react-router-dom'

import defaultProfile from '../assets/default-profile.jpg'
import '../assets/scss/components/Navbar.scss'

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark py-3">
      <div className="container d-flex justify-space-between">
        <Link className="navbar-brand" to="/">
          Todo Apps
        </Link>
        <img
          src={defaultProfile}
          alt="default profile"
          width="32"
          height="32"
          className="rounded-circle shadow"
        />
      </div>
    </nav>
  )
}
