import React from 'react'
import ReactPlayer from 'react-player'
import { useNavigate, useParams } from 'react-router-dom'
import { ADD_TO_HISTORY } from '../constants/reducerConstants'
import { useVideo } from '../context/VideoContext'

export const VideoPlayer = () => {
  const navigate = useNavigate()
  const { videoState, videoDispatch } = useVideo()
  console.log(videoState)
  const listedVideos = videoState?.videos
  const { id } = useParams()
  console.log('Id', id)
  console.log({ listedVideos })
  const selectedVideo = listedVideos.find((video) => video._id === id)
  console.log({ selectedVideo })
  if (selectedVideo === undefined) navigate(`/videos`)
  return (
    <div>
      {selectedVideo?.length !== 0 && (
        <>
          <div className='single__video__container'>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${selectedVideo.videoId}`}
              height='100%'
              width='100%'
              controls={true}
              onStart={() =>
                videoDispatch({ type: ADD_TO_HISTORY, payload: selectedVideo })
              }
            />
          </div>
        </>
      )}
    </div>
  )
}
