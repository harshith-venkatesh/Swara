import React from 'react'
import { NavLink } from 'react-router-dom'
import { musicLogo } from '../../constants/Image'
import './navbar.css'
export const NavBar = () => {
  return (
    <React.Fragment>
      <nav className='navbar-container pr--two'>
        <NavLink className='navLink' to='/home'>
          <div className='header-logo'>
            <img className='header-image' src={musicLogo} alt='Swara' />
            <div className='header__title'>Swara</div>
          </div>
        </NavLink>
        <div className='navbar__links'>
          <NavLink
            className='navLink'
            to='/home'
            activeClassName='navLink--select'
          >
            Home
          </NavLink>
          <NavLink
            className='navLink'
            to='/videos'
            activeClassName='navLink--select'
            end
          >
            Explore
          </NavLink>
          <NavLink
            className='navLink'
            to='/videos/library'
            activeClassName='navLink--select'
            end
          >
            Library
          </NavLink>
          <NavLink
            className='navLink'
            to='/playlists'
            activeClassName='navLink--select'
            end
          >
            My Playlist
          </NavLink>
        </div>
      </nav>
    </React.Fragment>
  )
}
