import { useState } from 'react'
import { SEARCH_VIDEO } from '../../constants/reducerConstants'
import { useVideo } from '../../context/VideoContext'

export const SearchCard = () => {
  const [searchParam, setSearchParam] = useState('')
  const { videoDispatch } = useVideo()
  const searchVideos = () => {
    videoDispatch({
      type: SEARCH_VIDEO,
      payload: searchParam.toLowerCase()
    })
  }

  const searchVideosOnEnter = (e) => {
    if (e.key === 'Enter') {
      searchVideos()
    }
  }
  const clearSearchResult = () => {
    setSearchParam('')
    videoDispatch({ type: SEARCH_VIDEO, payload: '' })
  }
  return (
    <>
      <div className='search__input'>
        <div className='search__input__data'>
          <input
            className='input'
            type='text'
            placeholder='Search For Videos'
            value={searchParam}
            onChange={(e) => setSearchParam(e.target.value)}
            onKeyDown={searchVideosOnEnter}
          ></input>
          {searchParam.length !== 0 && (
            <div className='btn--clear'>
              <i className='fa fa-times' onClick={clearSearchResult}></i>
            </div>
          )}
        </div>
        <button className='btn--search' onClick={searchVideos}>
          <i className='fa fa-search'></i>
        </button>
      </div>
    </>
  )
}
