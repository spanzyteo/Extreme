import { createSlice } from "@reduxjs/toolkit";

interface modalState {
  buyModal: boolean
  sellModal: boolean
}

const initialState: modalState = {
  buyModal: false,
  sellModal: false
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
    }
  }
})

export const {openBuyModal, closeBuyModal, openSellModal, closeSellModal} = modalSlice.actions
export default modalSlice.reducer