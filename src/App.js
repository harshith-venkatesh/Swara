import './styles.css'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import {
  History,
  Home,
  LikedVideos,
  PlayLists,
  SinglePlayList,
  VideoListing,
  VideoPlayer
} from './pages'
import { NavBar, SideNavBar } from './components'

export default function App() {
  return (
    <div>
      <div className='navbar sticky'>
        <NavBar />
      </div>
      <ToastContainer />
      <div className='container'>
        <div className='sidenav-container'>
          <SideNavBar />
        </div>
        <div className='component-container'>
          <Routes>
            <Route path='/' element={<VideoListing />} />
            <Route path='/home' element={<Home />} />
            <Route path='/videos' element={<VideoListing />} />
            <Route path='/videos/:id' element={<VideoPlayer />} />
            <Route path='/videos/liked' element={<LikedVideos />} />
            <Route path='/videos/history' element={<History />} />
            <Route path='/playlists' element={<PlayLists />} />
            <Route path='/playlists/:id' element={<SinglePlayList />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}
