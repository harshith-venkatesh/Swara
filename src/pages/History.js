import React from 'react'
import { VideoCard } from '../components'
import { useVideo } from '../context/VideoContext'

export const History = () => {
  const { videoState } = useVideo()
  const {historyVideos} = videoState;
  return (
      <>
        <div className='page__title'>History</div>
        <div className='library__container'>
          {historyVideos.length === 0 ? (
            <div>No Videos Found</div>
          ) : (
            historyVideos.sort((a,b) => b.timestamp-a.timestamp).map((video) => (
              <VideoCard key={video._id} video={video} />
            ))
          )}
        </div>
      </>
  )
}
