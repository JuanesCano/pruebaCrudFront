import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    users: [],
    isLoading: false,
}

export const registerUser = createAsyncThunk('userSlice/registerUser', 
    async(arg, { rejectWithValue, dispatch}) => {
        try {
            dispatch(setLoading(true))
            await axios.post("http://127.0.0.1:6000/user/register", arg);
            dispatch(setLoading(false))
        } catch (error) {
            return rejectWithValue(error.response.data.message)
        }
    }
);

export const loginUser = createAsyncThunk('userSlice/loginUser', 
    async(arg, { rejectWithValue, dispatch}) => {
        try {
            dispatch(setLoading(true))
            await axios.post("http://127.0.0.1:6000/user/login", arg);
            dispatch(setLoading(false))
        } catch (error) {
            return rejectWithValue(error.response.data.message)
        }
    }
);

const userSlice = createSlice ({
    name: "userSlice",
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.isLoading = action.payload
        }
    },

    extraReducers: (builder) => {
        builder.addCase(registerUser.fulfilled, (state, action) => {
            state.users = action.payload
            state.isLoading = false;
        })

        builder.addCase(registerUser.rejected, (state, action) => {
            state.isLoading = false;
            alert("error")
        })

        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.users = action.payload
            state.isLoading = false;
        })

        builder.addCase(loginUser.rejected, (state, action) => {
            state.isLoading = false;
            alert("error")
        })
    }
});

export const {setLoading} = userSlice.actions;

export default userSlice.reducer;