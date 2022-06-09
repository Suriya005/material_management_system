import { createSlice } from "@reduxjs/toolkit";

const materialSlices = createSlice({
    name: "material",
    initialState: {
        material: []
    },
    reducers: {
        setMaterial: (state, action) => {
            state.material = action.payload;
        }
    }
})

export const { setMaterial } = materialSlices.actions;
export default materialSlices.reducer;