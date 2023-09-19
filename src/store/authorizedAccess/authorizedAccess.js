import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { headerSetting } from "../../settings/headerSetting";

export const checkAuth = createAsyncThunk('authorizedAccess/connect', async () => {
    const response = await axios.get('http://localhost:5051/connect', {headers:headerSetting, withCredentials: true})
    return response.data
})

export const authorizedAccessSlice = createSlice({
    name: "authorizedAccess",
    initialState: {
        IsAuth: false
    },
    reducers: {
        connect: (state, { payload }) => {
            state.IsAuth = payload
        }
    },
    extraReducers(builder) {
        builder.addCase(checkAuth.fulfilled, (state, action) => {
            state.IsAuth = true
        })
    }
})


export const { actions, reducer } = authorizedAccessSlice