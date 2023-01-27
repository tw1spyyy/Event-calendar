import { createSlice } from "@reduxjs/toolkit"
import { EventInterface } from "../../types/types"
import { getEventsFromLs } from "../../utils/getEventsFromLS"

const eventsArray = getEventsFromLs()


const initialState:EventInterface = {
  events: eventsArray
}

export const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    addEvent(state, action){
      localStorage.setItem('events', JSON.stringify([...state.events, action.payload]))
      state.events = [...state.events, action.payload]
    },
    changeUser(state){
      state.events = getEventsFromLs()
    }
  },
})

export const {addEvent, changeUser} = eventSlice.actions

export default eventSlice.reducer