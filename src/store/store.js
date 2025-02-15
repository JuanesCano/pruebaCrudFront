import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./users/userSlice"
import postReducer from "./posts/postsSlice"

export const store = configureStore({
    reducer: {
       userStore: userReducer,
       postStore: postReducer
    },
})