import axios from 'axios'
import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { musicLogo } from '../../constants/Image'
import { DATA_FROM_SERVER } from '../../constants/reducerConstants'
import { useVideo } from '../../context/VideoContext'
import { errorToast } from '../Toast/Toast'
import './navbar.css'
export const NavBar = () => {
  const { videoState, videoDispatch } = useVideo()
  useEffect(() => {
    (async () => {
      try {
        if (videoState?.videos.length === 0) {
          const response = await axios.get('/api/videos')
          videoDispatch({
            type: DATA_FROM_SERVER,
            payload: response.data.videosList
          })
        }
      } catch (error) {
        errorToast('Error while fetching the products')
      }
    })()
  }, [videoState, videoDispatch])
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
