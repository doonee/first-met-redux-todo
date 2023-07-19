import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  boards: [],
  selectedBoardId: null,
};

const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    createBoard: (state, action) => {
      const newBoardName = action.payload;
      state.boards.push({
        id: state.boards.length + 1,
        title: newBoardName,
      });
    },
    deleteBoard: (state, action) => {
      const targetedBoardId = action.payload;
      return {
        ...state,
        boards: state.boards.filter((board) => board.id !== targetedBoardId),
      };
    },
    selectBoard: (state, action) => {
      state.selectedBoardId = action.payload;
    },
    resetBoard: () => {
      return initialState;
    },
  },
});

export const { createBoard, deleteBoard, selectBoard, resetBoard } =
  boardSlice.actions;

export default boardSlice.reducer;
