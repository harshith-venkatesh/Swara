import React from 'react'
import { VideoCard } from '../components'
import { useVideo } from '../context/VideoContext'

export const PlayLists = () => {
  const { videoState } = useVideo()
  const { playlists } = videoState
  return (
    <div>
      <>
        <div className='page__title'>
          <div>My Playlist</div>
        </div>

        {playlists.length === 0 ? (
          <div>No Videos Found</div>
        ) : (
          playlists.map(({ _id, title, videosList }) => (
            <div key={_id}>
              <div className='page__title'>
                <div>{title}</div>
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
