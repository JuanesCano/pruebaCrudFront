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

export const getPostforId = createAsyncThunk('postsSlice/getPostForId', async (postId, { rejectWithValue, dispatch }) => {
    try {
        dispatch(setLoading(true));
        const token = localStorage.getItem("token");
        const response = await axios.get(`https://pruebacrud.onrender.com/post/${postId}`, {
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
})

export const getUserPosts = createAsyncThunk('postsSlice/getUserPosts', async (arg, { rejectWithValue, dispatch }) => {
    try {
        dispatch(setLoading(true));
        const token = localStorage.getItem("token");
        const response = await axios.get(`https://pruebacrud.onrender.com/post/getUserPost`, {
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

export const addPosts = createAsyncThunk('postsSlice/addPosts', async (formData, { rejectWithValue, dispatch }) => {
    try {
        dispatch(setLoading(true));
        const token = localStorage.getItem("token");
        const response = await axios.post(`https://pruebacrud.onrender.com/post/addPost`, formData, {
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
})

export const updatePosts = createAsyncThunk('postsSlice/updatePosts', async ({ postId, updateData }, { rejectWithValue, dispatch }) => {
    try {
        dispatch(setLoading(true));
        const token = localStorage.getItem("token");
        const response = await axios.put(`https://pruebacrud.onrender.com/post/updatePost/${postId}`, updateData, {
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

        builder.addCase(getUserPosts.fulfilled, (state, action) => {
            state.posts = action.payload;
            state.error = null
            state.isLoading = false;
        })

        builder.addCase(getUserPosts.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
            alert("error", action.payload)
        })

        builder.addCase(addPosts.fulfilled, (state, action) => {
            state.posts = action.payload;
            state.error = null
            state.isLoading = false;
        })

        builder.addCase(addPosts.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
            alert("error", action.payload)
        })

        builder.addCase(getPostforId.fulfilled, (state, action) => {
            state.posts = action.payload;
            state.error = null
            state.isLoading = false;
        })

        builder.addCase(getPostforId.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
            alert("error", action.payload)
        })

        builder.addCase(updatePosts.fulfilled, (state, action) => {
            state.posts = action.payload;
            state.error = null
            state.isLoading = false;
        })

        builder.addCase(updatePosts.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
            alert("error", action.payload)
        })

        builder.addCase(deletePosts.fulfilled, (state, action) => {
            state.posts = action.payload;
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