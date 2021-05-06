import React from 'react'
import { VideoCard } from '../components'
import { useVideo } from '../context/VideoContext'

export const Library = () => {
  const { videoState } = useVideo()
  const { likedVideos, watchLater, historyVideos } = videoState
  return (
    <div>
      <>
        <div className='page__title'>
          <div>Liked Videos</div>
        </div>
        <div className='library__container'>
          {likedVideos.length === 0 ? (
            <div>No Videos Found</div>
          ) : (
            likedVideos.map((video) => (
              <VideoCard key={video._id} video={video} />
            ))
          )}
        </div>
        <hr />
        <div className='page__title'>
          <div>Watch Later Videos</div>
        </div>
        <div className='library__container'>
          {watchLater.length === 0 ? (
            <div>No Videos Found</div>
          ) : (
            watchLater.map((video) => (
              <VideoCard key={video._id} video={video} />
            ))
          )}
        </div>
        <hr />
        <div className='page__title'>
          <div>History</div>
        </div>
        <div className='library__container'>
          {historyVideos.length === 0 ? (
            <div>No Videos Found</div>
          ) : (
            historyVideos.map((video) => (
              <VideoCard key={video._id} video={video} />
            ))
          )}
        </div>
        <hr />
      </>
    </div>
  )
}
