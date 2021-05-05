import React from 'react'
import ReactPlayer from 'react-player'
import { useNavigate, useParams } from 'react-router-dom'
import {
  ADD_TO_HISTORY,
  LIKED_VIDEOS,
  WATCH_LATER
} from '../constants/reducerConstants'
import { useVideo } from '../context/VideoContext'
import { checkItem } from '../utils/checkItem'

export const VideoPlayer = () => {
  const navigate = useNavigate()
  const { videoState, videoDispatch } = useVideo()
  const listedVideos = videoState?.videos
  const { id } = useParams()
  const selectedVideo = listedVideos.find((video) => video._id === id)
  if (selectedVideo === undefined) {
    navigate(`/videos`)
  }
  const {
    _id,
    videoId,
    title,
    channel,
    views,
    timestamp,
    description
  } = selectedVideo

  const generateImageAvatar = (id) => {
    return `https://img.youtube.com/vi/${id}/mqdefault.jpg`
  }
  return (
    <div>
      {selectedVideo && (
        <>
          <div className='single__video__container'>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${videoId}`}
              height='100%'
              width='100%'
              controls={true}
              onStart={() =>
                videoDispatch({ type: ADD_TO_HISTORY, payload: selectedVideo })
              }
            />
          </div>
          <div className='video__player__footer'>
            <div className='video__player__avatar'>
              <img
                className='video__player__image__avatar'
                src={generateImageAvatar(videoId)}
                alt={title}
              />
            </div>
            <div className='video__player__details'>
              <div className='video__player__details--title'>{title}</div>
              <div className='video__player__details__description'>
                {description}
              </div>
              <div className='video__player__actions'>
                <div>
                  <div className='video__player__details--channel'>
                    {channel}
                  </div>
                  <div className='video__player__details--metadata'>
                    <span>{views}</span>
                    <span>{timestamp}</span>
                  </div>
                </div>
                <div>
                  <button
                    onClick={() =>
                      videoDispatch({
                        type: LIKED_VIDEOS,
                        payload: selectedVideo
                      })
                    }
                    className='btn btn-outline-primary'
                  >
                    {checkItem(videoState?.likedVideos, _id) ? 'LIKED' : 'LIKE'}
                  </button>
                  <button
                    onClick={() =>
                      videoDispatch({
                        type: WATCH_LATER,
                        payload: selectedVideo
                      })
                    }
                    className='btn btn-outline-success'
                  >
                    {checkItem(videoState?.watchLater, _id)
                      ? 'WATCH_LATER_ADDED'
                      : 'WATCH_LATER'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
