import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    posts: [],
    isLoading: false
};

export const getPosts = createAsyncThunk('postsSlice/getPosts', async (arg, { rejectWithValue, dispatch }) => {
    try {
        dispatch(setLoading(true));
        const token = localStorage.getItem("token");
        const response = await axios.get("https://pruebacrud.onrender.com/post", {
            headers: {
                Authorization: `Bearer ${token}`
            },
        })
        dispatch(setLoading(false));
        return response.data
    } catch (error) {
        dispatch(setLoading(false));
        return rejectWithValue(error.response?.data?.message || "Error desconocido");
    }
});

export const deletePosts = createAsyncThunk('postsSlice/deletePosts', async (postId, { rejectWithValue, dispatch }) => {
    try {
        dispatch(setLoading(true));
        const token = localStorage.getItem("token");
        const response = await axios.delete(`https://pruebacrud.onrender.com/post/deletePost/${postId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        dispatch(setLoading(false));
        return response.data
    } catch (error) {
        dispatch(setLoading(false));
        return rejectWithValue(error.response?.data?.message || "Error desconocido");
    }
});

const postSlice = createSlice({
    name: "postSlice",
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.isLoading = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getPosts.fulfilled, (state, action) => {
            state.posts = action.payload;
            state.error = null
            state.isLoading = false;
        })

        builder.addCase(getPosts.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
            alert("error", action.payload)
        })

        builder.addCase(deletePosts.fulfilled, (state, action) => {
            if (Array.isArray(state.posts.data)) {
                state.posts.data = state.posts.data.filter(post => post.id !== action.meta.arg);
            }
            state.error = null
            state.isLoading = false;
        })
        builder.addCase(deletePosts.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
            alert("error", action.payload)
        })
    }
});

export const { setLoading } = postSlice.actions;

export default postSlice.reducer;