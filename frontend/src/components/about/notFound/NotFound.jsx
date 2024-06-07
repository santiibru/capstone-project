import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="fw-bold text-center mt-5">
          <h1>404</h1>
          <h2>Page not found</h2>
      <Link to="/" className='btn btn-primary mb-5'>Back</Link>
    </div>
  )
}
