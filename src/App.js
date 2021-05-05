import './styles.css'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import {
  Home,
  PlayLists,
  SinglePlayList,
  VideoListing,
  VideoPlayer
} from './pages'
import { NavBar } from './components'
import { Library } from './pages/Library'

export default function App() {
  return (
    <div>
      <div className='navbar sticky'>
        <NavBar />
      </div>
      <ToastContainer />

      <div className='component-container'>
        <Routes>
          <Route path='/' element={<VideoListing />} />
          <Route path='/home' element={<Home />} />
          <Route path='/videos' element={<VideoListing />} />
          <Route path='/videos/:id' element={<VideoPlayer />} />
          <Route path='/videos/library' element={<Library />} />
          <Route path='/playlists' element={<PlayLists />} />
          <Route path='/playlists/:id' element={<SinglePlayList />} />
        </Routes>
      </div>
    </div>
  )
}
