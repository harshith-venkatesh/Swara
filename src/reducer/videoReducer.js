import {
  ADD_TO_PLAYLIST,
  CREATE_PLAYLIST,
  DATA_FROM_SERVER,
  ADD_TO_HISTORY,
  LIKED_VIDEOS,
  SEARCH_VIDEO,
  WATCH_LATER
} from '../constants/reducerConstants'

const checkVideoExists = (playlist, videoId) =>
  !!playlist.videos.some((_id) => _id === videoId)
export default function videoReducer(state, { type, payload }) {
  switch (type) {
    case DATA_FROM_SERVER:
      return {
        ...state,
        videos: payload
      }
    case LIKED_VIDEOS:
      return {
        ...state,
        likedVideos: state.likedVideos.includes(payload)
          ? state.likedVideos.filter((video) => video._id !== payload._id)
          : state.likedVideos.concat(payload)
      }
    case WATCH_LATER:
      return {
        ...state,
        watchLater: state.watchLater.includes(payload)
          ? state.watchLater.filter((video) => video._id !== payload._id)
          : state.watchLater.concat(payload)
      }
    case ADD_TO_HISTORY:
      console.log('history')
      return {
        ...state,
        historyVideos: state.historyVideos.some(
          (video) => video._id === payload
        )
          ? state.historyVideos
              .filter((video) => video._id !== payload._id)
              .concat(payload)
          : state.historyVideos.concat(payload)
      }
    case CREATE_PLAYLIST:
      return {
        ...state,
        playlists: [...state.playlist, payload]
      }
    case ADD_TO_PLAYLIST:
      const { playlistId, videoId } = payload
      return {
        ...state,
        playlists: [...state.playlists].map((playlist) => {
          if (playlist._id === playlistId) {
            if (checkVideoExists(playlist, videoId)) {
              return {
                ...playlist,
                videosList: playlist.videosList.filter((_id) => _id !== videoId)
              }
            }
            return {
              ...playlist,
              videosList: playlist.videosList.concat(videoId)
            }
          }
          return playlist
        })
      }

    case SEARCH_VIDEO:
      return {
        ...state,
        keyword: payload
      }

    default:
      return state
  }
}
