import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    playlistData : null,
    playlistItem:null,

    quesArray:null,
    quesCount:null,
    maxQues:0,

    currentCount:0,
    score:0
    
}
  
export const playlistSlice = createSlice({
    name: 'playlist',
    initialState,
    reducers: {
      setPlaylistData: (state,action) => {
        state.playlistData = action.payload
      },
      setPlaylistItem: (state,action) => {
        state.playlistItem = action.payload
      },

      setQuesArray: (state,action) => {
        state.quesArray = action.payload
      },
      setQuesCount: (state,action) => {
        state.quesCount = action.payload
      },
      setMaxQues : (state,action) => {
        state.maxQues = action.payload
      },

      setCurrentCount : (state,action) => {
        state.currentCount = action.payload
      },
      incScore : (state) => {
        state.score += 10
      },
      resetData : (state) => {
        state.playlistData = null
        state.playlistItem=null
    
        state.quesArray=null
        state.quesCount=null
        state.maxQues=0
    
        state.currentCount=0
        state.score=0
      }
    },
})

export const { setPlaylistData,setPlaylistItem,setQuesArray,setQuesCount,setMaxQues,setCurrentCount,incScore,resetData } = playlistSlice.actions

export default playlistSlice.reducer