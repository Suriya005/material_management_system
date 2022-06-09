import { configureStore } from "@reduxjs/toolkit";
import sessionReducer from "./session";
import materialReducer from "./material";

export default configureStore({
    reducer: {
        session: sessionReducer,
        material: materialReducer,
    },
})