import React from 'react'
import { Link } from 'react-router-dom'

export default function UserDetails (props) {
  return (
    <div className="user-details">
      <h1>User Details</h1>

        {/* { props.matched.name } */}
    
      <Link to="/">Go back to the start</Link>
         <div>
        </div>
    </div>
  )
}