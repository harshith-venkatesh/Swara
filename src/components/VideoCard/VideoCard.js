import React from 'react'
import { useNavigate } from 'react-router-dom'
import './videoCard.css'
export const VideoCard = ({ video }) => {
  const navigate = useNavigate()
  const { _id, videoId, title, views, timestamp, channel } = video
  const generateImage = (id) => {
    return `https://img.youtube.com/vi/${id}/mqdefault.jpg`
  }

  const generateImageAvatar = (id) => {
    return `https://img.youtube.com/vi/${id}/mqdefault.jpg`
  }

  return (
    <article className='video__card'>
      <div
        className='video__card__image__div'
        onClick={() => navigate(`/videos/${_id}`)}
        data-duration={timestamp}
      >
        <img
          className='video__card__image'
          src={generateImage(videoId)}
          alt={title}
        />
      </div>
      <div className='video__card__footer'>
        <div className='video__card__avatar'>
          <img
            className='video__card__image__avatar'
            src={generateImageAvatar(videoId)}
            alt={title}
          />
        </div>
        <div className='video__card__details'>
          <div className='video__card__details--title'>{title}</div>
          <div className='video__card__details--channel'>{channel}</div>
          <div className='video__card__details--metadata'>
            <span>{views}</span>
            <span>{timestamp}</span>
          </div>
        </div>
      </div>
    </article>
  )
}
