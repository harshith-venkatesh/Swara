import React from 'react'
import { VideoCard } from '../components'
import { DELETE_PLAYLIST } from '../constants/reducerConstants'
import { useVideo } from '../context/VideoContext'

export const PlayLists = () => {
  const { videoState, videoDispatch } = useVideo()
  const { playlists } = videoState

  return (
    <div>
      <>
        <div className='page__title'>
          <div>My Playlist</div>
        </div>

        {playlists.length === 0 ? (
          <div className='library__container'>No Videos Found</div>
        ) : (
          playlists.map(({ _id, title, videosList }) => (
            <div key={_id}>
              <div className='playlist__title'>
                <span>{title}</span>
                <span onClick={() =>
                    videoDispatch({ type: DELETE_PLAYLIST, payload: {_id,title} })
                  }
                  
                >
                 <i className='fa fa-fas fa-trash'></i>
                </span>
              </div>
              <div className='library__container'>
                {videosList.length === 0 ? (
                  <div>No Videos found for the playlist</div>
                ) : (
                  videosList.map((video) => (
                    <VideoCard key={video._id} video={video} />
                  ))
                )}
              </div>
              <hr />
            </div>
          ))
        )}
      </>
    </div>
  )
}
