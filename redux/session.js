import { createSlice } from "@reduxjs/toolkit";

const sessionSlice = createSlice({
  name: "session",
  initialState: {
    token: "",
    user: null,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      if (state.token && state.token.length > 0) {
        localStorage.setItem("token", state.token);
      } else {
        localStorage.removeItem("token");
      }
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    resetAll: (state) => {
      state.token = "";
      state.user = null;
      localStorage.removeItem("token");
    },
  },
});

export const { setToken, setUser, resetAll } = sessionSlice.actions;

export default sessionSlice.reducer;
