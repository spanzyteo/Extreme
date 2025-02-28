import { configureStore } from "@reduxjs/toolkit";
import modalReducer from './modalSlice'
import menubarReducer from './menubarSlice'

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    menubar: menubarReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch