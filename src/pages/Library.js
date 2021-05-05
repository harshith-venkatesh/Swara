import React from 'react'
import { VideoCard } from '../components'
import { useVideo } from '../context/VideoContext'

export const Library = () => {
  const { videoState } = useVideo()
  return (
    <div>
      <>
        <div className='page__title'>
          <div>Liked Videos</div>
        </div>
        <div className='library__container'>
          {videoState?.likedVideos.length === 0 ? (
            <div>No Videos Found</div>
          ) : (
            videoState?.likedVideos.map((video) => (
              <VideoCard key={video._id} video={video} />
            ))
          )}
        </div>
        <hr />
        <div className='page__title'>
          <div>Watch Later Videos</div>
        </div>
        <div className='library__container'>
          {videoState?.watchLater.length === 0 ? (
            <div>No Videos Found</div>
          ) : (
            videoState?.watchLater.map((video) => (
              <VideoCard key={video._id} video={video} />
            ))
          )}
        </div>
        <hr />
        <div className='page__title'>
          <div>History</div>
        </div>
        <div className='library__container'>
          {videoState?.historyVideos.length === 0 ? (
            <div>No Videos Found</div>
          ) : (
            videoState?.historyVideos.map((video) => (
              <VideoCard key={video._id} video={video} />
            ))
          )}
        </div>
        <hr />
      </>
    </div>
  )
}
