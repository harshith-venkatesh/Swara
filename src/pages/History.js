import React, { useState } from 'react'
import { VideoCard } from '../components'
import { useVideo } from '../context/VideoContext'

export const History = () => {
  const { videoState } = useVideo()
  console.log(videoState)
  const listedVideos = videoState?.historyVideos

  return (
    <div>
      <>
        <div className='page__title'>History</div>
        <div className='video__container'>
          {listedVideos.length === 0 ? (
            <div>No Videos Found</div>
          ) : (
            listedVideos.map((video) => (
              <VideoCard key={video._id} video={video} />
            ))
          )}
        </div>
      </>
    </div>
  )
}
