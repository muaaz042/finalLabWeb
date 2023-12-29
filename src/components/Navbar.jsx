import React from 'react'
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div>
        <ul>
            <li>
                <Link to='/home'>Home</Link>
            </li>
        </ul>
        <ul>
            <li>
                <Link to='/details'>Detail</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar;