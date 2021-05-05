import React from 'react'
import { NavLink } from 'react-router-dom'

export const MobileNavBar = () => {
  return (
    <div className='bottom__navigation__container'>
      <NavLink className='navLink' activeClassName='navLink--select' to='/'>
        <i className='fa fa-fas fa-home'></i>
      </NavLink>
      <NavLink
        className='navLink'
        activeClassName='navLink--select'
        to='/videos'
      >
        <i className='fa fa-fas fa-compass'></i>
      </NavLink>

      <NavLink
        className='navLink'
        activeClassName='navLink--select'
        to='/playlists'
      >
        <i className='fa fa-fas fa-list'></i>
      </NavLink>
      <NavLink
        className='navLink'
        activeClassName='navLink--select'
        to='/videos/library'
      >
        <i className='fa fa-fas fa-youtube'></i>
      </NavLink>
    </div>
  )
}
