import { configureStore } from '@reduxjs/toolkit'
import playlistReducer from '../features/playlistSlice'

export const store = configureStore({
  reducer: {
    playlist: playlistReducer,
  },
})