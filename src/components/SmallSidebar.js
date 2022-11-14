import React from 'react'

import { useAppContext } from '../context/appContext'
import Wrapper from '../assets/wrappers/SmallSidebar'

import Logo from './Logo'
import NavLinks from './NavLinks'

import { FaTimes } from 'react-icons/fa'

const SmallSidebar = () => {
  const { showSidebar, toggleSidebar } = useAppContext()
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container'
        }
      >
        <div className="content">
          <button className="close-btn" onClick={toggleSidebar}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <NavLinks toggleSidebar={toggleSidebar} />
        </div>
      </div>
    </Wrapper>
  )
}

export default SmallSidebar
