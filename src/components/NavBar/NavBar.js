import React from 'react'
import { NavLink } from 'react-router-dom'
import { musicLogo } from '../../constants/Image'
import { SearchCard } from '../Search/Search'
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
        <SearchCard />
        <div>
          <img
            className='video__card__image__avatar'
            src='https://media-exp1.licdn.com/dms/image/C4D03AQF6ao-JV-_YcQ/profile-displayphoto-shrink_100_100/0/1593626128287?e=1625702400&v=beta&t=35lA320SnQguHLeHFkb3XaMzYAFOzpPAKAKf5ntnJrs'
            alt='Harshith'
          />
        </div>
      </nav>
    </React.Fragment>
  )
}
