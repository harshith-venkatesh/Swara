import React from 'react'
import { NavLink } from 'react-router-dom'
import { musicLogo } from '../../constants/Image'
import { SearchCard } from '../Search/Search'

export const NavBar = () => {
  return (
    <React.Fragment>
      <nav className='navbar-container pr--two'>
        <NavLink className='navLink' to='/home'>
          <div className='header-logo'>
            <img className='header-image' src={musicLogo} alt='Swara' />
            <div className='header-title'>
              <span>Swara</span>
            </div>
          </div>
        </NavLink>
        <SearchCard />
        <div></div>
      </nav>
    </React.Fragment>
  )
}
