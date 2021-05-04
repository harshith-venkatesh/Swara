import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { VideoCard } from '../components'
import { errorToast } from '../components/Toast/Toast'
import { DATA_FROM_SERVER } from '../constants/reducerConstants'
import { useVideo } from '../context/VideoContext'
export const VideoListing = () => {
  const [isLoading, setIsLoading] = useState(false)
  const { videoState, videoDispatch } = useVideo()
  console.log(videoState)
  const listedVideos = videoState?.videos

  useEffect(() => {
    ;(async () => {
      try {
        if (videoState?.videos.length === 0) {
          setIsLoading(true)
          const response = await axios.get('/api/videos')
          console.log(response)
          videoDispatch({
            type: DATA_FROM_SERVER,
            payload: response.data.videosList
          })
        }
      } catch (error) {
        errorToast('Error while fetching the products')
      } finally {
        setIsLoading(false)
      }
    })()
    return () => {
      console.log('Video Listing rendered')
    }
  }, [videoState, videoDispatch])

  return (
    <div>
      {isLoading ? (
        <div className='page__loader'></div>
      ) : (
        <>
          <div className='page__title'>Recommended</div>
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
      )}
    </div>
  )
}
