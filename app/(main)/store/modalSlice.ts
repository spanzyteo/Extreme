import { createSlice } from "@reduxjs/toolkit";

interface modalState {
  buyModal: boolean
  sellModal: boolean
  about: boolean
}

const initialState: modalState = {
  buyModal: false,
  sellModal: false,
  about:false
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openBuyModal: (state) => {
      state.buyModal = true
    },
    closeBuyModal: (state) => {
      state.buyModal = false
    },
    openSellModal: (state) => {
      state.sellModal = true
    },
    closeSellModal: (state) => {
      state.sellModal = false
    },
    openAbout: (state) => {
      state.about = true
    },
    closeAbout: (state) => {
      state.about = false
    }
  }
})

export const {openBuyModal, closeBuyModal, openSellModal, closeSellModal, openAbout, closeAbout} = modalSlice.actions
export default modalSlice.reducer