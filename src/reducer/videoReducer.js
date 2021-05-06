import { errorToast, successToast } from '../components/Toast/Toast'
import {
  ADD_TO_PLAYLIST,
  CREATE_PLAYLIST,
  DATA_FROM_SERVER,
  ADD_TO_HISTORY,
  LIKED_VIDEOS,
  SEARCH_VIDEO,
  WATCH_LATER
} from '../constants/reducerConstants'
import { checkItem } from '../utils/checkItem'

export default function videoReducer(state, { type, payload }) {
  switch (type) {
    case DATA_FROM_SERVER:
      return {
        ...state,
        videos: payload
      }
    case LIKED_VIDEOS:
      state.likedVideos.includes(payload)
        ? errorToast(`${payload.title} is removed from Liked Videos`)
        : successToast(`${payload.title} is added to Liked Videos`)
      return {
        ...state,
        likedVideos: state.likedVideos.includes(payload)
          ? state.likedVideos.filter((video) => video._id !== payload._id)
          : state.likedVideos.concat(payload)
      }
    case WATCH_LATER:
      state.watchLater.includes(payload)
        ? errorToast(`${payload.title} is removed from Watch Later`)
        : successToast(`${payload.title} is added to Watch Later`)
      return {
        ...state,
        watchLater: state.watchLater.includes(payload)
          ? state.watchLater.filter((video) => video._id !== payload._id)
          : state.watchLater.concat(payload)
      }
    case ADD_TO_HISTORY:
      return {
        ...state,
        historyVideos: checkItem(state.historyVideos, payload._id)
          ? state.historyVideos
              .filter((video) => video._id !== payload._id)
              .concat(payload)
          : state.historyVideos.concat(payload)
      }
    case CREATE_PLAYLIST:
      successToast(`${payload.title} playlist is created`)
      return {
        ...state,
        playlists: [...state.playlists, payload]
      }
    case ADD_TO_PLAYLIST:
      const { playlistId, video } = payload
      return {
        ...state,
        playlists: [...state.playlists].map((playlist) => {
          if (playlist._id === playlistId) {
            if (checkItem(playlist.videosList, video._id)) {
              return {
                ...playlist,
                videosList: playlist.videosList.filter(
                  (playlistVideo) => playlistVideo._id !== video._id
                )
              }
            }
            return {
              ...playlist,
              videosList: playlist.videosList.concat(video)
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
