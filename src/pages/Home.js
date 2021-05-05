import React from 'react'
import { useNavigate } from 'react-router'

import homeSvg from '../home.svg'
export const Home = () => {
  const navigate = useNavigate()
  return (
    <div className='home__container'>
      <img src={homeSvg} alt='home' className='home__container__image' />
      <div className='home__container__content'>
        <h1>Learning Instruments, made easy</h1>
        <h1>Experiance the music like never before</h1>
        <button
          onClick={() => navigate(`/videos`)}
          className='btn btn-outline-primary'
        >
          Explore
        </button>
      </div>
    </div>
  )
}
