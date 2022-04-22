import { createSlice } from "@reduxjs/toolkit";

// createSlice adalah fungsi untuk membuat reducer
export const userSlice = createSlice({
  // nama dari reducer
  name: "user",

  // nilai awal dari state
  initialState: { value: { name: "", age: 0, email: "" } },

  reducers: {
    // membuat fungsi login
    login: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default userSlice.reducer;
