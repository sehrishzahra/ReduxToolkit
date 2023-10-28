import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  data: []
}

const DataSlice = createSlice({
  name: "storeData",
  initialState,
  reducers: {
    storingData: (state = initialState, action) => {
      state.data = action.payload
    },
    addingData: (state = initialState, action) => {
      const { id, title, status } = action.payload
      return {
        ...state ,
        data: [{ id: id, title: title, completed: status }, ...state.data]
      };
    },
    removingData: (state, action) => {
      return {
        ...state,
        data: state.data.filter(item => item.id !== action.payload)
      };
    },
    clearAllData: (state, action) => {
      return {
        ...state,
        data: []
      };
    },
    updateData: (state, action) => {
     
      return {
        ...state,
        data: state.data.map(item => 
          item.id === action.payload
            ? { ...item, completed: !item.completed }
            : item
        )
      };
    }
  },
})

export const { storingData } = DataSlice.actions;
export const { addingData } = DataSlice.actions;
export const { removingData } = DataSlice.actions;
export const { clearAllData } = DataSlice.actions;
export const { updateData } = DataSlice.actions;
export default DataSlice.reducer;