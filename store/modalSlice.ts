import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalType {
  modalType: "LoginModal";
}

const initialState = {
  modalType: "",
  isOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<ModalType>) => {
      const { modalType } = action.payload;
      state.modalType = modalType;
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
  },
});
export const { closeModal, openModal } = modalSlice.actions;
export default modalSlice.reducer;
