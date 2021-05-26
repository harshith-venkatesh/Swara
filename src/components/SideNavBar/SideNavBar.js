import React from 'react'
import { NavLink } from 'react-router-dom'

export const GenerateHeader = ({ icon, title }) => {
  return (
    <div className='sidebar__row'>
      <div className='sidebar__icon'>
        <i className={icon} aria-hidden='true'></i>
      </div>
      <div className='sidebar__title'>{title}</div>
    </div>
  )
}
export const SideNavBar = () => {
  return (
    <div className='custom__navbar'>
      <NavLink className='navLink' to='/home' activeClassName='navLink--select'>
        <GenerateHeader icon='fa fa-home' title='Home' />
      </NavLink>
      <NavLink
        className='navLink'
        to='/videos'
        activeClassName='navLink--select'
        end
      >
        <GenerateHeader icon='fa fa-play' title='Videos' />
      </NavLink>
      <NavLink
        className='navLink'
        to='/videos/liked'
        activeClassName='navLink--select'
        end
      >
        <GenerateHeader icon='fa fa-thumbs-o-up' title='Liked Videos' />
      </NavLink>
      <NavLink
        className='navLink'
        to='/videos/watch'
        activeClassName='navLink--select'
        end
      >
        <GenerateHeader icon='fa fa-clock-o' title='Watch Later' />
      </NavLink>
      <NavLink
        className='navLink'
        to='/videos/history'
        activeClassName='navLink--select'
      >
        <GenerateHeader icon='fa fa-history' title='History' />
      </NavLink>
      <NavLink
        className='navLink'
        to='/playlists'
        activeClassName='navLink--select'
        end
      >
        <GenerateHeader icon='fa fa-list' title='My Playlist' />
      </NavLink>
    </div>
  )
}
