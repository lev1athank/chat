import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const chatUser = createSlice({
    name: "chatUser",
    initialState: {
        user: {},
        messages: []
    },
    reducers: {
        setUserData: (state, { payload }) => {
            state.user = payload.dataUser
            state.messages = payload.messages
        }
    }

})


export const { actions, reducer } = chatUser