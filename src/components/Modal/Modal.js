import React, { useState } from 'react'
import {
  ADD_TO_PLAYLIST,
  CREATE_PLAYLIST
} from '../../constants/reducerConstants'
import { useVideo } from '../../context/VideoContext'
import { checkItem } from '../../utils/checkItem'
import './modal.css'
import { v4 as uuidv4 } from 'uuid'
export const Modal = ({ show, setShow, video }) => {
  const { videoState, videoDispatch } = useVideo()
  const { playlists } = videoState
  const [playList, setPlayList] = useState('');
  const [showAddPlayList,setShowAddPlayList] = useState(false);
  const checkHandler = (e, playlistId, video) => {
    videoDispatch({ type: ADD_TO_PLAYLIST, payload: { playlistId, video } })
  }
  const createPlayList = (e) => {
    e.preventDefault()
    if (playList.length !== 0) {
      videoDispatch({
        type: CREATE_PLAYLIST,
        payload: {
          _id: uuidv4(),
          title: playList,
          videosList: [video]
        }
      })
      setPlayList('')
    }
  }
  return (
    <>
      <div className={show ? 'overlay__modal' : 'hide'}>
        <div className={show ? 'modal__div' : 'hide'}>
          <button className='btn--clear' onClick={() => setShow(false)}>
            &times;
          </button>
          <div className="saveto__header">Save To</div>
          <div className='modal___body'>
            {playlists.length > 0 &&
              playlists.map(({ _id, title, videosList }) => (
                <div key={_id}>
                  
                  <span>
                    
                    <input
                      type='checkbox'
                      onChange={(e) => checkHandler(e, _id, video)}
                      checked={checkItem(videosList, video._id)}
                    />
                    <span className='saveto__title'>{title}</span>
                  </span>
                </div>
              ))}
          </div>
          <div className="flex">
          
            <button className="playlist-button" onClick={()=> setShowAddPlayList(prev => !prev)}>Create New Playlist</button>
          </div>
          {showAddPlayList && (<div className='modal__footer'>
            <input
              type='text'
              className="modalInput"
              onChange={(e) => setPlayList(e.target.value)}
              placeholder='Create Playlist here'
              value={playList}
            />
            <button
              className='btn btn-outline-primary'
              onClick={(e) => createPlayList(e)}
            >
              Add
            </button>
          </div>)}
        </div>
      </div>
    </>
  )
}
