import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

import links from '../utils/links'

const NavLinks = ({ toggleSidebar }) => {
  return (
    <div className="nav-links">
      {links.map((link) => {
        const { text, path, id, icon } = link
        return (
          <NavLink
            to={path}
            key={id}
            onClick={toggleSidebar}
            end
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        )
      })}
    </div>
  )
}

NavLinks.propTypes = {
  toggleSidebar: PropTypes.func
}

export default NavLinks
