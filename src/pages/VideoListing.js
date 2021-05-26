import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { VideoCard } from '../components'
import { SearchCard } from '../components/Search/Search'
import { errorToast } from '../components/Toast/Toast'
import { DATA_FROM_SERVER } from '../constants/reducerConstants'
import { useVideo } from '../context/VideoContext'
export const VideoListing = () => {
  const [isLoading, setIsLoading] = useState(false)
  const { videoState, videoDispatch } = useVideo()
  const searchResult = (videos, search) => {
    if (search) {
      videos = videos.filter((video) =>
        video.title.toLowerCase().includes(search)
      )
    }
    return videos
  }
  const listedVideos = searchResult(videoState?.videos, videoState.keyword)
  useEffect(() => {
    ;(async () => {
      try {
        if (videoState?.videos.length === 0) {
          setIsLoading(true)
          const response = await axios.get('/api/videos')
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
  }, [videoState, videoDispatch])

  return (
    <div>
      {isLoading ? (
        <div className='page__loader'></div>
      ) : (
        <>
          <div className='page__title'>
            <div className='listing__title'>Recommended</div>
            <SearchCard />
          </div>
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
