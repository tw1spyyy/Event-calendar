import { configureStore } from '@reduxjs/toolkit'
import auth from './slices/authSlice'
import event from './slices/eventSlice'

export const store = configureStore({
  reducer: {
    auth,
    event
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch