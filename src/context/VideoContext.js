import { createContext, useContext, useReducer } from 'react'
import videoReducer from '../reducer/videoReducer'

const VideoContext = createContext()
const initialState = {
  videos: [],
  likedVideos: [],
  watchLater: [],
  historyVideos: [],
  playlists: [],
  keyword: ''
}

export function VideoProvider({ children }) {
  const [state, dispatch] = useReducer(videoReducer, initialState)

  return (
    <VideoContext.Provider
      value={{ videoState: state, videoDispatch: dispatch }}
    >
      {children}
    </VideoContext.Provider>
  )
}

export const useVideo = () => useContext(VideoContext)
