import { createSlice } from '@reduxjs/toolkit'

interface menubarState {
  menubarOPen: boolean
}

const initialState: menubarState = {
  menubarOPen: false
}

const menubarSlice = createSlice({
  name: 'menubar',
  initialState,
  reducers: {
    openMenubar: (state) => {
      state.menubarOPen = true
    },
    closeMenubar: (state) => {
      state.menubarOPen = false
    },
    toggleSwitch: (state) => {
      state.menubarOPen = !state.menubarOPen
    }
  }
})

export const {openMenubar, closeMenubar, toggleSwitch} = menubarSlice.actions
export default menubarSlice.reducer